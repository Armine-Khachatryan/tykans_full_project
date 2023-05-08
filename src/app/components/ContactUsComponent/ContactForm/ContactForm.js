import React, {useState} from "react";
import axios from "axios";
import Query from '../Query/Query';
import config from "../../../config";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import useInput from "../../../hooks/useInput";
import classes from './ContactForm.module.css';
import useValidation from "../../../hooks/useValidation";




function ContactForm(props) {
    const [showQuery, setShowQuery]=useState(false);
    const {isNotEmpty, isEmail, isPhoneNumber} = useValidation();


    const {
        value: fullname,
        isValid: fullnameIsValid,
        hasError: fullnameHasError,
        valueChangeHandler: fullnameChangeHandler,
        inputBlurHandler: fullnameBlurHandler,
        reset: resetFullname,
    } = useInput(isNotEmpty);

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);

    const {
        value: phoneNumber,
        isValid: phoneNumberIsValid,
        hasError: phoneNumberHasError,
        valueChangeHandler: phoneNumberChangeHandler,
        inputBlurHandler: phoneNumberBlurHandler,
        reset: resetPhoneNumber,
    } = useInput(isPhoneNumber);

    const{
        value:discussValue,
        isValid:discussValueIsValid,
        hasError:discussValueHasError,
        valueChangeHandler:discussValueChangeHandler,
        inputBlurHandler:discussValueBlurHandler,
        reset:resetDiscussValue,
    } =useInput(isNotEmpty)



    const values= {
        full_name:fullname,
        email:email,
        phone:phoneNumber,
        description:discussValue
    }



    let fullnameInput = true
    let showEmailInput = false;
    let showPhoneInput = false;
    let showDiscussTextarea = false;
    if (fullnameIsValid) {
        showEmailInput = true
    }
    if (fullnameIsValid && emailIsValid) {
        showPhoneInput = true
    }

    if (fullnameIsValid && emailIsValid && phoneNumberIsValid) {
        showDiscussTextarea = true
    }

    let formIsValid = false;
    if (fullnameIsValid
        && emailIsValid
        && phoneNumberIsValid
        && discussValueIsValid
    ) {
        formIsValid = true;
    }


    let emailMessage = null;
    if (!email) {
        emailMessage = "Email is required";
    } else if (!emailIsValid) {
        emailMessage = "Invalid email";
    }

    let postContactUsValues = async (values)=> {
        try {
            let response = await axios.post(`${config.baseUrl}api/contact/create`, values)
        }
        catch (e) {
            console.log(e.response, 'registrationError');
        }
    }


    const submitHandler =async event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        await postContactUsValues(values)
        await setShowQuery(true)
        await resetFullname();
        await resetEmail();
        await resetPhoneNumber();
        await resetDiscussValue()
    };


        return (
        <div className={classes.wholeContact}>
            <div className="container">
                {!showQuery?   <form className={classes.greyForm}
                                     onSubmit={submitHandler}
                >
                    <div className={classes.formTitle}><span className={classes.redForm}>*</span> REQUIRED</div>
                    <Input
                        color={"#FFFFFF"}
                        show={fullnameInput}
                        hasError={fullnameHasError}
                        errorText="Please enter Full Name."
                        label="Full Name"
                        red=" *"
                        input={{
                            value: fullname,
                            placeholder: "",
                            type: "text",
                            onChange: fullnameChangeHandler,
                            onBlur: fullnameBlurHandler
                        }}
                    />
                    <Input
                        color={"#FFFFFF"}
                        show={showEmailInput}
                        hasError={emailHasError}
                        errorText={emailMessage}
                        label="email"
                        red=" *"
                        input={{
                            value: email,
                            placeholder: "",
                            type: "email",
                            onChange: emailChangeHandler,
                            onBlur: emailBlurHandler
                        }}
                    />
                    <Input
                        color={"#FFFFFF"}
                        show={showPhoneInput}
                        hasError={phoneNumberHasError}
                        errorText="Please enter phone number."
                        label="phone"
                        red=" *"
                        input={{
                            value: phoneNumber,
                            placeholder: "",
                            type: "text",
                            onChange: phoneNumberChangeHandler,
                            onBlur: phoneNumberBlurHandler
                        }}
                    />
                    {showDiscussTextarea &&
                        <div className={classes.selectAndLabelContact}>
                            <label className={classes.selectLabelContact} htmlFor="discuss">wHAT WOULD YOU LIKE TO
                                DISCUSS?
                                <span className={classes.redForm}>*</span>
                            </label>
                            <textarea className={`${discussValueHasError? classes.invalid : ""}`}
                               id="discuss" rows="4" name="discuss"
                                      value={discussValue}
                                      onChange={discussValueChangeHandler}
                                      onBlur={discussValueBlurHandler}
                            />
                            {discussValueHasError &&
                            <div className={classes.textDanger}>Please fill in the textarea.</div>}
                        </div>
                    }
                    <div className={classes.btnsDiv}>
                        <Button
                            disabled={!formIsValid}
                            color="#92374D" type={"submit"}>Submit </Button>
                    </div>
                </form>
                    :
                    <Query contactInfo={props.contactInfo}/>}
            </div>
        </div>
    )

}


export default ContactForm;