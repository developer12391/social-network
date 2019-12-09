import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let Users = React.memo(({users, currentPage, onPageChange, totalUsersCount, pageSize, ...props}) => {
    return (
        <div>
            <div className={s.paginator}>
                <Paginator currentPage={currentPage}
                           onPageChange={onPageChange}
                           pageSize={pageSize}
                           totalItemsCount={totalUsersCount}
                />
            </div>

            <div className={s.content}>

                {users.map(u => <div className={s.items}>
                    <User user={u}
                          key={u.id}
                          followingInProgress={props.followingInProgress}
                          unfollow={props.unfollow}
                          follow={props.follow}/>
                    </div>
                )}

            </div>
        </div>

    )

})
export default Users;