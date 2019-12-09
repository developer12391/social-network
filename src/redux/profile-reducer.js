import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    kinds: [
        {id: 1, name: 'Place'},
        {id: 2, name: 'Music'}
    ],
    postsData: [
        {
            id: 1,
            title: 'Global Festival',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'Budapest'
        },
        {
            id: 2,
            title: 'House for Sale',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'New York City'
        },
        {
            id: 3,
            title: 'Pixel Cinema',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'Warshawa'
        },
        {
            id: 4,
            title: 'Coffee House',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'India'
        },
        {
            id: 5,
            title: 'Historical Place',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'Kiev'
        },
        {
            id: 6,
            title: 'Shop for Rent',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'New York city'
        },
        {
            id: 7,
            title: 'Resturent Name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'South Africa'
        },
        {
            id: 8,
            title: 'Pixel Name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. ' +
                'Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, ' +
                'at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris.' +
                ' Sed nec purus euismod, pharetra nibh a, aliquet lorem.. ' +
                'Suspendisse pretium ullamcorper neque et aliquam.\n',
            location: 'London'
        },

    ],
    profile: null,
    status: ""
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 9,
                    title: action.newMessageText,
                    location: 'Australia'
                }
                ]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
            case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            };
        default:
            return state;

    }
}

export const addPostAC = (newMessageText) =>
    ({type: ADD_POST,newMessageText});

export const deletePost= (postId) =>
    ({type: DELETE_POST,postId});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});
export const setStatus = (status) => ({
    type: SET_STATUS, status
});
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
            dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
}
export default profileReducer;