import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Redirect} from 'react-router-dom';
import {DialogsComponentType, dialogsDataType, MessagesType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type DialogsPageType = {
    dialogs: dialogsDataType[]
    messages: Array<MessagesType>
}
type AddMessageFormType = {
    newMessageBody: string
}
const Dialogs = (props: DialogsComponentType) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (formData: AddMessageFormType) => {
        props.sendMessage(formData.newMessageBody)
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>

            </div>
        </div>
    )
}


const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter Your Message...'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const AddMessageReduxForm = reduxForm<AddMessageFormType>({form: 'AddMessageForm'})(AddMessageForm)

export default Dialogs;
