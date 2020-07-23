import React, { Component } from 'react';
import {Link, withRouter } from "react-router-dom";
import InpuMask from 'react-input-mask';
import './form.scss';
import {Success} from "../success/success";
import { validateRegex } from "../../helpers/helpers";

class FormSingUp extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            valueName: '',
            valueLogin: '',
            valueEmail: '',
            valueTel: '',
            valuePswd: '',
            isValidForm: false,
            isTypeInputText: false,
            isChecked: false,
            isValidPhone: false,
            isValidPswd: false,
            isValidEmail: false,
            showSuccess: false
        }

        this.state = this.initialState;
    }

    validateForm = (state) => {
        const { valueName, valueLogin, valueEmail, valuePswd, isChecked, isValidPhone, isValidPswd } = state;

        return Boolean(valueName && valueLogin && valueEmail && valuePswd && isChecked && isValidPhone && isValidPswd);
    };

    handleChangeName = (evt) => {
        const value = evt.target.value;
        this.setState((state) => ({
            valueName: value,
            isValidForm: this.validateForm({ ...state, valueName: value })
        }));
    }

    handleChangeLogin = (evt) => {
        const value = evt.target.value.trim();
        this.setState((state) => ({
            valueLogin: value,
            isValidForm: this.validateForm({ ...state, valueLogin: value })
        }));
    }

    handleChangeEmail = (evt) => {
        const value = evt.target.value.trim();
        const emailRegex = /.+@.+\..+/;
        const isValidEmail = validateRegex(emailRegex, value);

        this.setState((state) => ({
            valueEmail: value,
            isValidEmail: isValidEmail,
            isValidForm: this.validateForm({
                ...state,
                valueEmail: value,
                isValidEmail: isValidEmail
                })
        }));
    }

    handleChangeTel = (evt) => {
        const value = evt.target.value;
        const valueClearSpace = value.split(' ').join('').split('_').join('');
        const phoneRegex = new RegExp('^(([+]{0,1}\\d{2})|\\d?)[\\s-]?[0-9]{2}[\\s-]?[0-9]{3}[\\s-]?[0-9]{4}$');
        const isValidPhone = validateRegex(phoneRegex, valueClearSpace);

        this.setState((state) => ({
            valueTel: valueClearSpace,
            isValidPhone: isValidPhone,
            isValidForm: this.validateForm({
                ...state,
                valueTel: valueClearSpace,
                isValidPhone: isValidPhone
            })
        }));
    }

    handleChangePswd = (evt) =>{
        const value = evt.target.value.trim();
        const pswdRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
        const isValidPswd = validateRegex(pswdRegex, value);

        this.setState((state) => ({
            valuePswd: value,
            isValidPswd: isValidPswd,
            isValidForm: this.validateForm({
                ...state,
                valuePswd: value,
                isValidPswd: isValidPswd
            })
        }));
    }

    handleClickToggle = () =>{
        this.setState((state) => ({isTypeInputText: !state.isTypeInputText}));
    }

    handleChangeCheckbox = () =>{
        this.setState((state) => ({
            isChecked: !state.isChecked,
            isValidForm: this.validateForm({
                ...state,
                isChecked: !state.isChecked
            })
        }));
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { history } = this.props;

        this.setState({showSuccess: true});

        setTimeout(() => {
            history.push("/")
        }, 3500)
    }

    render() {
        return (
            <React.Fragment>
                <form className={"form"}
                      onSubmit={this.handleSubmit}>
                    <div className={"form__field"}>
                        <input className={"form__input"} type={"text"} name={"name"} id={"name"} required
                               value={this.state.valueName}
                               onChange={this.handleChangeName}/>
                        <label className={"form__label form__label--absolute"} htmlFor={"name"}>Имя</label>
                    </div>
                    <div className={"form__field"}>
                        <input className={"form__input"} type={"text"} name={"login"} id={"login"} required
                               value={this.state.valueLogin}
                               onChange={this.handleChangeLogin}/>
                        <label className={"form__label form__label--absolute"} htmlFor={"login"}>Никнейм</label>
                    </div>
                    <div className={"form__field"}>
                        <input className={"form__input"} type={"email"} name={"email"} id={"email"} required
                               value={this.state.valueEmail}
                               onChange={this.handleChangeEmail}
                                pattern={".+@.+\\..+"}
                        />
                        <label className={"form__label form__label--absolute"} htmlFor={"email"}>Email</label>
                    </div>
                    <div className={"form__field"}>
                        <InpuMask
                            className={"form__input"}
                            mask="+7\ 999 999 99 99"
                            maskPlaceholder="_"
                            name={"tel2"}
                            id={"tel2"}
                            value={this.state.valueTel}
                            onChange={this.handleChangeTel}
                            required/>
                        <label className={"form__label form__label--absolute"} htmlFor={"tel"}>Телефон</label>
                    </div>
                    <div className={"form__field"}>
                        <input className={"form__input"} name={"pswd"} id={"pswd"} required
                               type={this.state.isTypeInputText ? "text" : "password" }
                               value={this.state.valuePswd}
                               onChange={this.handleChangePswd}
                               pattern={"((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})"}
                            />
                        <label className={"form__label form__label--absolute"} htmlFor={"pswd"}>Пароль</label>
                        <button className={"form__switch-input-type"} type={"button"}
                                onClick={this.handleClickToggle}>
                            <svg className={this.state.isTypeInputText ? "eye eye--on" : "eye" } width={16} height={12} viewBox="0 0 19 14" fill="none">
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
                    <div className={"form__field form__field--agreement"}>
                        <input className={"form__input form__input--agreement visually-hidden"} type={"checkbox"} name={"agreement"} id={"agreement"} required
                               checked={this.state.isChecked}
                               onChange={this.handleChangeCheckbox}/>
                        <label className={"form__label form__label--agreement"} htmlFor={"agreement"}>Я даю свое согласие на обработку персональных данных</label>
                    </div>
                    <div className={"form__field"}>
                        <button className={"btn form__btn"} type={"submit"} disabled={!this.state.isValidForm}>Зарегистрироваться </button>
                    </div>
                    <div className={"form__field form__field--text-center"}>
                        <span className={"form__question"}>Есть аккаунт?</span>
                        <Link className={"form__link"} to="/">Войти</Link>
                    </div>
                </form>
                {
                    this.state.showSuccess ? <Success text={"зарегистрированы"}/> : ""
                }
            </React.Fragment>
            )
    }
}

export default withRouter(FormSingUp);
