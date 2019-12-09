import React from 'react';
import {connect} from "react-redux";
import {addPostAC} from "../../redux/profile-reducer";
import Home from "./Home";

let mapStateToProps =(state) => {
    return {
        listing: state.profilePage.postsData,
        newTitleText: state.profilePage.newTitleText,
        newDescriptionText: state.profilePage.newDescriptionText
    }
}

export default connect(mapStateToProps,
    {addPostAC})(Home);

