import React from "react";
import FormSingIn from '../components/forms/sing-in';

export const PageSingIn = () => {
    return (
        <div>
            <h1 className={"title"}>Вход</h1>
            <p className={"title__desc"}>Введите свои данные</p>
            <FormSingIn/>
        </div>
    )
}
