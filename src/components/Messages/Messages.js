import React from 'react';
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs/Dialogs";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const Messages = (props) => {
    let state=props.messagesPage;
    let dialogsElement = state.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);
    let messageElement = state.messages.map(d=><Dialogs message={d.message} id={d.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.content}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className={s.dialogs}>
                <div>{messageElement}</div>
                    <AddMessageFormRedux  onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}
const AddMessageForm = ({handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <Field className={s.textMessage} component={Textarea}
                   name="newMessageBody"
                   validate={[required,maxLength50]}
                   placeholder="Enter your message"/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const maxLength50 = maxLengthCreator(50);

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Messages;