import React from "react";
import FormSingUp from '../components/forms/sing-up';
import  { Title } from '../components/title/title';

export const PageSingUp = () => {
    return (
        <>
            <Title title={"Регистрация"}/>
            <FormSingUp/>
        </>
    )
}
