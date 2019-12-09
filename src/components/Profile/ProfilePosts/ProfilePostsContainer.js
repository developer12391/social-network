import React from 'react';
import s from './ProfilePosts.module.css';
import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";
import {addPostAC} from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newTitleText: state.profilePage.newTitleText,
        newDescriptionText: state.profilePage.newDescriptionText
    }
}
export default connect(mapStateToProps,
    {addPostAC})(ProfilePosts);
