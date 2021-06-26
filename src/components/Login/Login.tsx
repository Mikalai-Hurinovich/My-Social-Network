import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createFormField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/Validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReduxRootState} from "../../Redux/redux-store";
import s from './../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string;
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createFormField('Email', 'email', Input, [required])}
            {createFormField('Password', 'password', Input, [required], {type: 'password'})}
            {createFormField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'Remember Me')}
            {/*<div>*/}
            {/*   */}
            {/*    <Field validate={[required]} placeholder={'Email'} name={'email'} component={Input}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field validate={[required]} placeholder={'Password'} type={'password'} name={'password'}*/}
            {/*           component={Input}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field type={'checkbox'} name={'rememberMe'} component={Input}/> Remember Me*/}
            {/*</div>*/}
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    // set unique name
    form: 'login'
})(LoginForm)
const mapStateToProps = (state: ReduxRootState) => ({
    isAuth: state.auth.isAuth
})
const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) return <Redirect to={'/Profile'}/>
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(mapStateToProps, {login})(Login);
