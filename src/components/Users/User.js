import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import svg1 from "../Listing/Posts/svg1.svg";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div className={s.description}>
                <NavLink to={'/profile/' + user.id}>
                    <img className={s.photoProfile}
                         src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                </NavLink>
                <div> {user.name}</div>
                <div className={s.location}>
                    <div> <img src={svg1} alt=""/> </div>
                    <div className={s.locationName}>India</div>
                </div>
                <div className={s.userInfo}>
                    <div className={s.itemInfo}>
                        <div>15</div>
                        <div>Listings</div>
                    </div>
                    <div className={s.itemInfo}>
                        <div>150</div>
                        <div>Followers</div>
                    </div>
                    <div className={s.itemInfo}>
                        <div>265</div>
                        <div>Following</div>
                    </div>
                </div>
            </div>

            {user.followed ?
                <button disabled={followingInProgress.some(id => id === user.id)}
                        className={s.button+" "+s.buttonUnfollow}
                        onClick={() => {
                            unfollow(user.id);

                        }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                          className={s.button+" "+s.buttonFollow}
                          onClick={() => {
                              follow(user.id);

                          }}>Follow</button>}
        </div>
    )


}

export default User;