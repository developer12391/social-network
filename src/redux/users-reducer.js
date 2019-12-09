import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 10,
    isFetching: true,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed:true})
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    "id",
                    {followed:false})
            };
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id=>id!=action.userId)}
        default:
            return state;

    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UN_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalCountAC = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})

export const getUsers = (currentPage,pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPageAC(currentPage));
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalCountAC(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
    dispatch(toggleFollowingProgress(true,userId));
    let response = await apiMethod(userId);
        if(response.data.resultCode==0){
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingProgress(false,userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccess)
    }
}

export const unfollow =(userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch,userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess)
    }
}
export default usersReducer;