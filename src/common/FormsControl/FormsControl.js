import React from 'react';
import s from './FormsControl.module.css';
import {Field} from "redux-form";

export const FormControl = ({input, meta:{touched,error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl +" "+(hasError?  s.error: "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}></textarea></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}></input></FormControl>
}

export const CreateField = (placeholder,name,component,validate,props={}, text="") => {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validate}
               {...props}/> {text}
    </div>

}