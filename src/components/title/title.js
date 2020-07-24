import React from "react";
import './title.scss';

export const Title = (props) => {
    return (
        <>
            <h1 className={"title"}>{props.title}</h1>
            <p className={"title__desc"}>Введите свои данные</p>
        </>
    )
}
