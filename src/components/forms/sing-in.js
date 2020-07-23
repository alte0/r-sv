import React, { Component } from 'react';
import {Link } from "react-router-dom";
import './form.scss';

class FormSingIn extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            valueLogin: '',
            isValidForm: false,
            isTypeInput: false
        }

        this.state = this.initialState;
    }

    handleChangeLogin = (evt) => {
        this.setState({valueLogin: evt.target.value});
    }

    handleChangePswd = (evt) =>{
        this.setState({valuePswd: evt.target.value});
    }

    handleClickToggle = () =>{
        console.log('handleClickToggle')
        this.setState((state) => ({isTypeInput: !state.isTypeInput}));
    }

    render() {
        return (
            <form className={"form"}>
                <fieldset className={"form__fieldset"}>
                    <legend className="visually-hidden">Данные пользователя</legend>
                    <div className={"form__field"}>
                        <input className={"form__input"} type={"text"} name={"login"} id={"login"} required
                               value={this.state.valueLogin}
                               onChange={this.handleChangeLogin}/>
                        <label className={"form__label form__label--absolute"} htmlFor={"login"}>Email или номер телефона</label>
                    </div>
                    <div className={"form__field"}>
                        <input className={"form__input"}  name={"pswd"} id={"pswd"} required
                               type={!this.state.isTypeInput ? "password" : "text"}
                               value={this.state.valuePswd}
                               onChange={this.handleChangePswd}
                               pattern={"((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})"}
                                />
                        <label className={"form__label form__label--absolute"} htmlFor={"pswd"}>Пароль</label>
                        <button className={"form__switch-input-type"} type={"button"}
                            onClick={this.handleClickToggle}>
                            <svg className={"eye"} width={16} height={12} viewBox="0 0 19 14" fill="none">
                                <path
                                    d="M12.113 7A2.572 2.572 0 116.97 7a2.572 2.572 0 015.143 0v0z"
                                />
                                <path
                                    d="M1.363 7a8.575 8.575 0 0116.358 0A8.575 8.575 0 011.363 7v0z"
                                />
                            </svg>
                            <span className={"visually-hidden"}>Посмотреть или скрыть пароль</span>
                        </button>
                    </div>
                </fieldset>
                <div className={"form__field"}>
                    <button className={"btn form__btn"} type={"submit"} disabled={!this.state.isValidForm}>Войти </button>
                </div>
                <div className={"form__field form__field--text-center"}>
                    <span className={"form__question"}>Нет аккаунта?</span>
                    <Link className={"form__link"} to="/sing-up">Зарегистрироваться</Link>
                </div>
            </form>
        )
    }
}

export default FormSingIn;
