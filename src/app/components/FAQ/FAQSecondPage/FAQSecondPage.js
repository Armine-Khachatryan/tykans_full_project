import React, {useState} from "react";
import useInput from "../../../hooks/useInput";
import Input from "../../../UI/Input/Input";
import useValidation from "../../../hooks/useValidation";
import Button from "../../../UI/Button/Button";
import OrangeQ from '../../../assets/images/faq/OrangeQ.png';
import classes from './FAQSecondPage.module.css';
import axios from "axios";
import config from "../../../config";




function FAQSecondPage(props){
    const {isEmail}=useValidation();
    const [sentEmailInFaq, setSentEmailInFaq]=useState(false);

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);

    let formIsValid = false;
    if (emailIsValid) {
        formIsValid = true;
    }

    let notifyViaEmail = async (email)=> {
        let formData = new FormData();
        formData.append('email', email);
        try {
            let response = await axios.post(`${config.baseUrl}api/job/notify-me`, formData);
            setSentEmailInFaq(true);
        }
        catch (e) {
            console.log(e.response, 'registrationError');
        }
    }

    const submitHandler = async event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        await notifyViaEmail(email);
        await resetEmail()
    }


    let emailMessage =null;
    if(!email){
        emailMessage = "Email is required";
    }
    else if (!emailIsValid){
        emailMessage = "Invalid email";
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            submitHandler(event)
        }
    }


    return(
        <div className="container">
            <div className={classes.orangeDivWhole}>
                <img className={classes.orangeQ} src={OrangeQ} alt=""/>
                <div className={classes.orangeText}>
                    {props.faqInfo?.sections?.[1].attributes?.title}
                </div>
            </div>
            <div className={classes.robotQuestionsDiv}>
                <div className={classes.robotText}
                     dangerouslySetInnerHTML={{ __html: props.faqInfo?.sections?.[1].attributes?.description}}>
                    </div>
                <div>
                    <img className={classes.robot}
                        src={`${config.baseUrl}storage/` +`${props.faqInfo?.sections?.[1].attributes?.image}`} alt=""/>
                </div>
            </div>
            <form
                onSubmit={submitHandler}
            >
                <Input
                    hasError = {emailHasError}
                    errorText={emailMessage}
                    label="EMAIl"
                    border="1px solid #C0C0C0"
                    borderRadius="8px"
                    show={true}
                    input={{
                        value: email,
                        placeholder: "",
                        type: "email",
                        onKeyPress:handleKeyPress,
                        onChange: emailChangeHandler,
                        onBlur: emailBlurHandler
                    }}
                />
                <div className={classes.btns}>
                    <Button color="#92374D" border="1px solid #C0C0C0" type={"submit"}>Notify Me</Button>
                </div>
                {sentEmailInFaq && <p className={classes.send}>Your email is saved successfully! </p>}
            </form>
        </div>
    )
}


export default FAQSecondPage;