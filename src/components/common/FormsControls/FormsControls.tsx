import React, {ComponentProps} from "react";
import s from './FormsControls.module.css'
import {Field} from "redux-form";

const FormControl = (props: any) => {
    const {input, child, meta, ...restProps} = props;
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props: ComponentProps<any>) => {
    const {input, child, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...props.input} {...restProps}/></FormControl>
}
export const Input = (props: ComponentProps<any>) => {
    const {input, child, meta, ...restProps} = props;
    return <FormControl {...props}><input {...props.input} {...restProps}/></FormControl>
}

export const createFormField = (placeholder: string | null, name: string, component: Function, validators: []|[(value: string) => string | undefined], props?: any, text?: string) => {
    return (
        <div>
            <Field validate={validators}
                   placeholder={placeholder}
                   name={name}
                   component={component}
                   {...props}
            />{text}
        </div>
    )
}
