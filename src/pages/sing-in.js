import React from "react";
import FormSingIn from '../components/forms/sing-in';
import  { Title } from '../components/title/title';

export const PageSingIn = () => {
    return (
        <>
            <Title title={"Вход"}/>
            <FormSingIn/>
        </>
    )
}
