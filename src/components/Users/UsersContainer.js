import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,getUsers
} from "../../redux/users-reducer";
import Preloader from "../../common/preloader/Preloader";
import Users from "./Users";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/users-selectors";
import s from './Users.module.css'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState !=this.state;
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
    }
    render() {
        console.log("USERS")
        return <>
            {this.props.isFetching ? <div className={s.preloader}><Preloader/></div>  : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChange={this.onPageChange}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}


let mapStateToProps =(state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        currentPage: getCurrentPageSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

export default connect(mapStateToProps,{follow,unfollow,getUsers})(UsersContainer);