import React from "react";
import './success.scss';

export const Success = (props) => {
    const { text } = props;
    return (
        <div className={"success"}>
            <svg className={"success__svg"} width="185" height="185" viewBox="0 0 212 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M106 13.25c-51.22 0-92.75 41.53-92.75 92.75s41.53 92.75 92.75 92.75 92.75-41.53 92.75-92.75S157.22 13.25 106 13.25zm40.061 62.461l-43.601 60.453a6.583 6.583 0 01-10.704 0L65.94 100.389c-.786-1.097 0-2.629 1.346-2.629h9.71a6.593 6.593 0 015.362 2.754l14.74 20.454 32.546-45.133a6.621 6.621 0 015.362-2.753h9.71c1.346 0 2.132 1.532 1.346 2.63z" fill="#000" />
            </svg>
            <p className={"success__text"}>Вы {text}</p>
        </div>
    )
}
