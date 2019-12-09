import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) =>{
    return{
        messagesPage: state.messagesPage,
        newMessage: state.messagesPage.newMessage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody)=>{
            dispatch(addMessageAC(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Messages);