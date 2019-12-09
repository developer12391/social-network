import React from 'react';
import {
    addPostAC
} from "../../../redux/profile-reducer";
import Form from './Form';
import {connect} from "react-redux";

let mapStateToProps =(state) => {
    return {
        newTitleText: state.profilePage.newTitleText,
        newDescriptionText: state.profilePage.newDescriptionText
    }
}

export default connect(mapStateToProps,
    {addPostAC})(Form);

