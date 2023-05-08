import React from "react";


const regExpName = /([A-Z][a-z]*)([\\s\\\'-][A-Z][a-z]*)*/;
const regExpEmail = /\w+(\.|-|_)?\w+@\w+\.\w{2,3}/ ;
const regExpPass =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const regExpPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const regExpURL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/


const isName = value => regExpName.test(value);
const isEmail = value => regExpEmail.test(value);
const isPassword = value => regExpPass.test(value);
const isNotEmpty = value => value.trim() !== '';
const isPhoneNumber = value => regExpPhone.test(value);
const isURL = value =>regExpURL.test(value);

const useValidation = () => {

    return {
        isName,
        isEmail,
        isPassword,
        isPhoneNumber,
        isNotEmpty,
        isURL
    }
}

export default useValidation;