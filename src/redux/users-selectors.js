import {createSelector} from "reselect";
const getUsersSuperSelector = (state) => {
    return state.profilesPage.users;
}

export const getUsersSelector = createSelector(getUsersSuperSelector,
    (users)=> {
        return users.filter(u=>true)
    })

export const getPageSizeSelector=(state) => {
    return state.profilesPage.pageSize;
}

export const getTotalUsersCountSelector=(state) => {
    return state.profilesPage.totalUsersCount;
}
export const getCurrentPageSelector=(state) => {
    return state.profilesPage.currentPage;
}
export const getIsFetchingSelector=(state) => {
    return state.profilesPage.isFetching;
}
export const getFollowingInProgressSelector=(state) => {
    return state.profilesPage.followingInProgress;
}