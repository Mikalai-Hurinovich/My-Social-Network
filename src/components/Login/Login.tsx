import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/Validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={'Login'} name={'login'} component={Input}/>
            </div>
            <div>
                <Field validate={[required]} placeholder={'Password'} type={'password'} name={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> Remember Me
            </div>
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

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;
