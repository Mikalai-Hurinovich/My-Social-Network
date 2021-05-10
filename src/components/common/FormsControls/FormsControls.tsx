import React from "react";
import s from './FormsControls.module.css'
// @ts-ignore
export const Textarea = (props) => {
    const {input, child, meta, ...restProps} = props;
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                <textarea {...props.input} {...restProps}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )
}
