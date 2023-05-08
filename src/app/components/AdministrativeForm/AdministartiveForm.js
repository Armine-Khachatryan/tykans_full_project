import React, {useState} from "react";
import axios from "axios";
import config from "../../config";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import useInput from "../../hooks/useInput";
import {useNavigate} from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import classes from './AdministartiveForm.module.css';
import FileUploader from "../FileUploader/FileUploader";
import Attach from '../../assets/images/administrative/Attach.png';



function AdministartiveForm(props) {

    const[showApplyingMessage, setShowApplyingMessage]=useState(false);

    const [selectedFile, setSelectedFile] = useState({
        attachedCV: {
            file:null
        },
        attachedCoverLetter: {
            file:null
        }
    });


    const saveData = (e) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setSelectedFile({
                ...selectedFile,
                [e.target.name]: {
                    file :e.target.files[0],
                    base64:reader.result
                },
            })
        }, false);
            reader.readAsDataURL(e.target.files[0]);
    }

    const [values, setValues] = useState({
        eligibleWorkValue: '',
        visaSponsorshipValue: ''
    });

    const [errors, setErrors] = useState({
        eligibleWorkValue: null,
        visaSponsorshipValue: null,
    });

    const handleChange = ({target: {name, value}}) => {
        setValues({
            ...values,
            [name]: value,
        })
        setErrors({
            ...errors,
            [name]: null
        });
    };

    const {isNotEmpty, isEmail, isPhoneNumber, isURL} = useValidation();
    const navigate = useNavigate();

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
        value: confirmEmailValue,
        isValid: confirmEmailIsValid,
        valueChangeHandler: confirmEmailChangeHandler,
        inputBlurHandler: confirmEmailBlurHandler,
        reset: resetConfirmEmail,
        isTouched: confirmEmailIsTouched
    } = useInput(isEmail);

    const {
        value: phoneNumber,
        isValid: phoneNumberIsValid,
        hasError: phoneNumberHasError,
        valueChangeHandler: phoneNumberChangeHandler,
        inputBlurHandler: phoneNumberBlurHandler,
        reset: resetPhoneNumber,
    } = useInput(isPhoneNumber);


    const {
        value: portfolio,
        hasError: portfolioHasError,
        valueChangeHandler: portfolioChangeHandler,
        inputBlurHandler: portfolioBlurHandler,
        reset: resetPortfolio,
    } = useInput(isNotEmpty);

    const {
        value: linkedInProfile,
        hasError: linkedInProfileHasError,
        valueChangeHandler: linkedInProfileChangeHandler,
        inputBlurHandler: linkedInProfileBlurHandler,
        reset: resetLinkedInProfile,
    } = useInput(isURL);

    const {
        value: otherWebsite,
        hasError: otherWebsiteHasError,
        valueChangeHandler: otherWebsiteChangeHandler,
        inputBlurHandler: otherWebsiteBlurHandler,
        reset: resetOtherWebsite,
    } = useInput(isURL);


    let hasConfirmEmailError = false;
    let confirmEmailMessage = null;
    if (email !== confirmEmailValue) {
        hasConfirmEmailError = true;
        confirmEmailMessage = "Emails do not match"
    }


    let formIsValid = false;
    if (fullnameIsValid
        && emailIsValid
        && confirmEmailIsValid
        && phoneNumberIsValid
        && selectedFile.attachedCV.file !==null
        && selectedFile.attachedCoverLetter.file !==null
        && values.eligibleWorkValue !==""
        && values.visaSponsorshipValue !==""
    ) {
        formIsValid = true;
    }


    const formValues = {
        full_name:fullname,
        email:email,
        confirm_email:confirmEmailValue,
        phone:phoneNumber,
        resume:selectedFile.attachedCV.file,
        cover_letter:selectedFile.attachedCoverLetter.file,
        portfolio_url:portfolio,
        linkedin_profile_url:linkedInProfile,
        other_website_url:otherWebsite,
        work_in_canada:values.eligibleWorkValue,
        will_you_now:values.visaSponsorshipValue,
        job_post_id:props.id
    }


    let postJob = async (formValues)=> {
        let formData = new FormData();
        formData.append('full_name', formValues.full_name);
        formData.append('email', formValues.email);
        formData.append('confirm_email', formValues.confirm_email);
        formData.append('phone', formValues.phone);
        formData.append('resume', formValues.resume);
        formData.append('cover_letter', formValues.cover_letter);
        formData.append('portfolio_url', formValues.portfolio_url);
        formData.append('linkedin_profile_url', formValues.linkedin_profile_url);
        formData.append('other_website_url', formValues.other_website_url);
        formData.append('work_in_canada', formValues.work_in_canada);
        formData.append('will_you_now', formValues.will_you_now);
        formData.append('job_post_id', formValues.job_post_id);
        try {
            let response = await axios.post(`${config.baseUrl}api/job/apple`, formData);
            if(response.status ===200){
                setShowApplyingMessage(true)
            }
        }
        catch (e) {
            console.log(e.response, 'postJob error');
        }
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        postJob(formValues);
        resetFullname();
        resetEmail();
        resetConfirmEmail();
        resetPhoneNumber();
        setSelectedFile({
            attachedCV: {
                file: null
            },
            attachedCoverLetter: {
                file: null
            }
        });
        setValues({
            eligibleWorkValue: "",
            visaSponsorshipValue: ""
        });
        resetPortfolio();
        resetLinkedInProfile();
        resetOtherWebsite();
    }



    let emailMessage = null;
    if (!email) {
        emailMessage = "Email is required";
    } else if (!emailIsValid) {
        emailMessage = "Invalid email";
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            submitHandler()
        }
    }

    return (
        <div className={classes.entireForm}>
            {showApplyingMessage ?
                <div className="container">
                    <div className={classes.queryWhole}>
                        <div className={classes.queryLeft}>
                            <img className={classes.imgQuery}
                                 src={`${config.baseUrl}storage/` +
                                     `${props.administrativePageInfo?.blocks[0]?.attributes?.image}`} alt=""/>
                        </div>
                        <div className={classes.queryRight}>
                            <div className={classes.queryTitle}>
                                {props.administrativePageInfo?.blocks[0]?.attributes?.title}</div>
                            <div className={classes.queryText}
                                 dangerouslySetInnerHTML=
                                     {{__html:props.administrativePageInfo?.blocks[0]?.attributes?.description}}/>
                        </div>
                    </div>
                </div>
                :
                <form
                    onSubmit={submitHandler}
                >
                    <div className={classes.formTitles}>
                        <div className={classes.formTitle}>SUBMIT YOUR APPLICATION</div>
                        <div className={classes.formSubTitle}>
                            <span className={classes.redForm}>*</span> REQUIRED</div>
                    </div>
                    <Input
                        hasError={fullnameHasError}
                        errorText="Please enter Full Name."
                        label="Full Name"
                        show={true}
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
                        hasError={emailHasError}
                        errorText={emailMessage}
                        label="email"
                        show={true}
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
                        hasError={hasConfirmEmailError && confirmEmailIsTouched}
                        errorText={confirmEmailMessage}
                        label="confirm email"
                        show={true}
                        red=" *"
                        input={{
                            value: confirmEmailValue,
                            placeholder: "",
                            type: "email",
                            onChange: confirmEmailChangeHandler,
                            onBlur: confirmEmailBlurHandler,
                        }}
                    />
                    <Input
                        hasError={phoneNumberHasError}
                        errorText="Please enter phone number."
                        label="phone"
                        show={true}
                        red=" *"
                        input={{
                            value: phoneNumber,
                            placeholder: "",
                            type: "text",
                            onChange: phoneNumberChangeHandler,
                            onBlur: phoneNumberBlurHandler
                        }}
                    />

                    <div className={classes.attachedWhole}>
                        <div className={classes.attachOne}>
                            <div className={classes.attachedTitle}>Resume / cv
                                <span className={classes.redForm}>*</span>
                            </div>
                            <div className={classes.attachedSubTitle}>(Accepted file formats: .pdf, .doc, .docx)</div>
                            <FileUploader
                                accept={'application/msword,application/pdf'}
                                img={Attach}
                                name="attachedCV"
                                onHandleFile={saveData}
                                btnText="Attach Resume/CV"
                            />
                            <a className={classes.uploadedFile}
                               href={selectedFile.attachedCV?.base64}
                               download={selectedFile.attachedCV?.file?.name}>
                                {selectedFile.attachedCV?.file?.type}
                            </a>
                        </div>
                        <div className={classes.attachOne}>
                            <div className={classes.attachedTitle}>cOVER LETTER
                                <span className={classes.redForm}>*</span>
                            </div>
                            <div className={classes.attachedSubTitle}>(Accepted file formats: .pdf, .doc, .docx)</div>
                            <FileUploader
                                accept={'application/msword,application/pdf'}
                                img={Attach}
                                name="attachedCoverLetter"
                                onHandleFile={saveData}
                                btnText=" Attach Cover Letter"
                            />
                            <a className={classes.uploadedFile}
                               href={selectedFile.attachedCoverLetter?.base64}
                               download={selectedFile.attachedCoverLetter?.file?.name}>
                                {selectedFile.attachedCoverLetter?.file?.type}
                            </a>
                        </div>
                    </div>
                    <div className={classes.formTitles}>
                        <div className={classes.formTitle}>LINKS</div>
                    </div>
                    <Input
                        hasError={portfolioHasError}
                        errorText="Please enter a portfolio"
                        label="pORTFOLIO"
                        show={true}
                        input={{
                            value: portfolio,
                            placeholder: "",
                            type: "text",
                            onChange: portfolioChangeHandler,
                            onBlur: portfolioBlurHandler,
                        }}
                    />
                    <Input
                        hasError={linkedInProfileHasError}
                        errorText="Please enter LinkedIn Profile URL"
                        label="Linkedin profile"
                        show={true}
                        input={{
                            value: linkedInProfile,
                            placeholder: "",
                            type: "text",
                            onChange: linkedInProfileChangeHandler,
                            onBlur: linkedInProfileBlurHandler,
                        }}
                    />
                    <Input
                        hasError={otherWebsiteHasError}
                        errorText="Please enter other website URL"
                        label="other website"
                        show={true}
                        input={{
                            value: otherWebsite,
                            placeholder: "",
                            type: "text",
                            onChange: otherWebsiteChangeHandler,
                            onBlur: otherWebsiteBlurHandler,
                        }}
                    />
                    <div className={classes.formLastDiv}>
                        <div className={classes.formTitle}>QUICK QUESTIONS</div>
                    </div>
                    <div className={classes.selectAndLabel}>
                        <label className={classes.selectLabel} htmlFor="eligibleWork">
                            aRE YOU ELIGBLE TO WORK IN CANADA?
                            <span className={classes.redForm}>*</span>
                        </label>
                        <select className={classes.selectInput} id="eligibleWork"
                                onChange={handleChange}
                                name="eligibleWorkValue">
                            <option selected disabled hidden value={values.eligibleWorkValue}>--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <div className={classes.textDanger}>
                            {errors.eligibleWorkValue}
                        </div>
                    </div>
                    <div className={classes.selectAndLabel} onKeyPress={handleKeyPress}>
                        <label htmlFor="visaSponsorship" className={classes.selectLabel}>
                            wILL YOU NOW, OR IN THE FUTURE, REQUIRE VISA SPONSORSHIP FOR
                            EMPLOYMENT AT TYKANS?
                            <span className={classes.redForm}>*</span>
                        </label>
                        <select id="visaSponsorship" className={classes.selectInput}
                                name="visaSponsorshipValue"
                                onChange={handleChange}
                        >
                            <option selected disabled hidden value={values.visaSponsorshipValue}
                            > --
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <div className={classes.textDanger}>
                            {errors.visaSponsorshipValue}
                        </div>
                    </div>
                    <div className={classes.privacyStatement}>PRIVACY STATEMENT
                        <span className={classes.redForm}>*</span>
                        <div className={classes.privacy}>When you apply on this site, any personal data and documents
                            contained on your application will be collected by Tykans Group Inc. Your personal data
                            will be subject to Tykans’
                            <span className={classes.unerlinedSpan}
                                  onClick={()=>navigate('/candidate-privacy-policy')}>
                                Candidate Privacy Statement.</span></div>
                    </div>
                    <div className={classes.btnDiv}>
                        <Button
                            disabled={!formIsValid}
                            color="#92374D" type={"submit"}>Submit Application</Button>
                    </div>
                </form>
            }
        </div>
    )
}


export default AdministartiveForm;