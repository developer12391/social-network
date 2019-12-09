import React, {useState,useEffect} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode=()=> {
        setEditMode(true);
    }
    const deactivateEditMode=()=> {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    useEffect(()=> {
        setStatus(props.status);
    },[props.status])

        return (
            <div>
                {!editMode &&
                <div className={s.nonActivateStatus}>
                    <span onDoubleClick={activateEditMode}>{props.status || "Double click and type your status..."}</span>
                </div>
                }
                {editMode &&
                <div className={s.nonActivateStatus}>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}></input>
                </div>
                }
            </div>
        );

}

export default ProfileStatusWithHooks;