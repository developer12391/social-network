import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <div>
            <Preloader/>
        </div>
    }

    return (
        <div>
            <div >
                <div className={s.photo} >
                    <img src={props.profile.photos.small} alt=""/>
                </div>
                <div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;