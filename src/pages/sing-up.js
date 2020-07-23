import React from "react";
import FormSingUp from '../components/forms/sing-up';

export const PageSingUp = () => {
    return (
        <>
            <h1 className={"title"}>Регистрация</h1>
            <p className={"title__desc"}>Введите свои данные</p>
            <FormSingUp/>
        </>
    )
}
