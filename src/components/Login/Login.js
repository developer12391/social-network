import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {CreateField, Input} from "../../common/FormsControl/FormsControl";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import s from './Login.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form  onSubmit={handleSubmit}>
            {CreateField("Email", "email", Input, [required])}
            {CreateField("Password", "password", Input, [required], {type: "password"})}
            {CreateField(null, "rememberMe", Input, [], {type: "checkbox"}, "Remember me")}

            {error && <div className={s.formError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={s.form}>
            <h1>Login</h1>
            <div >
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>

        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);