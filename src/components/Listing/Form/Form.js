import React from 'react';
import s from "./Form.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControl/FormsControl";
import {required} from "../../../utils/validators/validators";

const Form = (props) => {
    let addPost = (value) => {
        props.addPostAC(value.newTitleText,value.newDescriptionText);
    }

    console.log("FORM")
    return (
        <div>
            <h3 className={s.headingText}>Place Submit Listing</h3>
            <hr className={s.hrLine}/>
            <AddNewListingFormRedux onSubmit={addPost}/>
        </div>
    );
}

const AddNewListingForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={s.blockInfo}>
                <div className={s.title}>
                    Title
                </div>
                <div className={s.titleDescription}>
                    <Field name={"newTitleText"} component={Input} validate={[required]} className={s.titleText}/>
                </div>
            </div>
            <div className={s.blockInfo}>
                <div className={s.title}>
                    Description
                </div>
                <div className={s.titleDescription}>
                    <Field validate={[required]} component={Input} name={"newDescriptionText"} className={s.descriptionText}/>
                </div>
            </div>

            <div>
                    <button className={s.btn}>Add post</button>
            </div>
        </form>
    )
}


const AddNewListingFormRedux = reduxForm({form:'addNewListing'})(AddNewListingForm)

export default Form;
