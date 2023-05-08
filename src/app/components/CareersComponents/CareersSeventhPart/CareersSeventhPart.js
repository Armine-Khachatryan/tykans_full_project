import React from "react";
import config from "../../../config";
import classes from './CareersSeventhPart.module.css';



function CareersSeventhPart(props){


    return(
        <div className={classes.seventhWhole}>
            <div className={classes.seventhMain}>
                <div className={classes.seventhLeftRight}>
                    <div className={classes.seventhImgDiv}>
                        <img className={classes.seventhImg}
                             src={`${config.baseUrl}storage/` +`${props?.careersInfo?.blocks?.[8]?.attributes?.image}`}
                             alt=""/>
                    </div>
                    <div className={classes.seventhText}
                    dangerouslySetInnerHTML={{ __html: props?.careersInfo?.blocks?.[8]?.attributes?.description }}/>
                    <button className={classes.redBtn} onClick={props.moveToTeamTestimonials}>
                        Team Testimonials
                    </button>
                </div>
                <div className={classes.seventhLeftRight}>
                    <div className={classes.seventhImgDiv}>
                        <img className={classes.seventhImg}
                             src={`${config.baseUrl}storage/` +`${props?.careersInfo?.blocks?.[9]?.attributes?.image}`}
                             alt=""/>
                    </div>
                    <div className={classes.seventhText}
                         dangerouslySetInnerHTML=
                             {{ __html: props?.careersInfo?.blocks?.[9]?.attributes?.description }}/>
                    <button className={classes.redBtn} onClick={props.moveToFAQ}>FAQ’s</button>
                </div>
            </div>
        </div>
    )
}


export default CareersSeventhPart;