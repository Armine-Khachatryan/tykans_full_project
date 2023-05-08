import React, {useState} from "react";
import axios from "axios";
import moment from 'moment';
import config from "../../../config";
import {useNavigate} from "react-router-dom";
import useInput from "../../../hooks/useInput";
import classes from './CareersSixthPart.module.css';
import useValidation from "../../../hooks/useValidation";
import Location from '../../../assets/images/administrative/Location.png';
import Calendar from '../../../assets/images/administrative/Calendar.png';



function CareersSixthPart (props){

    const navigate= useNavigate();
    const {isEmail}=useValidation();
    const [sentEmail, setSentEmail]=useState(false);

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
            let response = await axios.post(`${config.baseUrl}api/job/notify-me`, formData)
            setSentEmail(true)
        } catch (e) {
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


    const renderJobs=props.jobInfo?.map((item,index)=>{
        return(
            <div className={classes.professionWholeShowDiv}  key={item.id}
                 onClick={(event)=>props.onShowJobHandler(index)}>
                <div className={classes.professionDiv}>
                    <div className={classes.dropdownFirstPart}>
                        <div className={classes.professionPosition}>{item.name}</div>
                        <div className={classes.professionNumber}>{item.job_posts_count}</div>
                    </div>
                    {!item.showJob ?
                    <svg width="30" height="19" viewBox="0 0 30 19"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.732421 3.76766L14.9999 18.0352L29.2674 3.76766L25.7324 0.232657L14.9999
                        10.9652L4.26742 0.232658L0.732421 3.76766Z" fill="#92374D"/>
                    </svg> :
                        <svg width="30" height="19" viewBox="0 0 30 19"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.2676 15.2323L15.0001 0.964843L0.732576 15.2323L4.26758 18.7673L15.0001
                            8.03484L25.7326 18.7673L29.2676 15.2323Z" fill="#92374D"/>
                        </svg>}
                </div>
                {item.showJob &&
                    item.job_posts.map((member,index)=>{
                    return(
                        <div className={classes.professionJobWhole}  key={member.id}>
                            <div className={classes.jobTypes}>
                                <div className={classes.jobType}>{member.title}</div>
                                <div className={classes.jobTypeBelow}>{member.workflow}</div>
                            </div>
                            <div className={classes.locationDiv}>
                                <img className={classes.locationImg} src={Location} alt=""/>{member.address}
                            </div>
                            <div className={classes.calendarDiv}>
                                <img className={classes.calendarImg} src={Calendar} alt=""/>
                                {moment(member.created_at).format('YYYY-MM-DD')}
                            </div>
                            <div className={classes.btnDiv}>
                                <button className={classes.adminBtn}
                                onClick={()=>{navigate(`/careers/job/` + member.id,{state:member.id})}}>
                                    View more</button>
                            </div>
                        </div>
                    )
                })}
        </div>
    )})

    return(
        <>
            <div className={classes.sixthPartWhole} id="explore">
                <div className={classes.titleSixthPart}>{props?.careersInfo?.sections?.[3]?.attributes?.title}</div>
                <div className={classes.titleSixthPartBold}
                     dangerouslySetInnerHTML={{ __html: props?.careersInfo?.sections?.[3]?.attributes?.description }}>
                </div>
                {renderJobs}
                <div className={classes.titleBelow}>{props?.careersInfo?.sections?.[4]?.attributes?.title}</div>
                <div className={classes.titleBelow}
                     dangerouslySetInnerHTML={{ __html: props?.careersInfo?.sections?.[4]?.attributes?.description }}/>
                <form onSubmit={submitHandler}>
                    <div className={classes.emailAndNotify}>
                        <div className={classes.inputClass}>
                            <label htmlFor='email'>Email</label>
                            <input
                                value={email}
                                placeholder=""
                                type="email"
                                onKeyPress={handleKeyPress}
                                onChange={emailChangeHandler}
                                onBlur={emailBlurHandler}
                            />
                            {emailHasError &&  <p className={classes.errorText}>{emailMessage}</p>}
                        </div>
                        <button className={classes.notifyMe}>Notify me</button>
                    </div>
                    {sentEmail && <p className={classes.send}>Your email is saved successfully! </p>}
                </form>
            </div>
        </>
    )
}


export default CareersSixthPart;