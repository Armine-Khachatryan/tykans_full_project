import React from "react";
import config from "../../../config";
import BlueFrame from '../../../assets/images/BlueFrame.png';
import classes from './CareersFifthPart.module.css';



function  CareersFifthPart (props){

    return(
        <>
            <div className={classes.careersFifthPartBackImg}  style={{'background-image': `url(${BlueFrame})`,
                height: "1222px"}}>
                <div className={classes.photoCareersFifthPart}
                     style={{ 'background-image':
                             `url(${config.baseUrl}storage/${props?.careersInfo?.sections?.[2]?.attributes?.image})`,
                         height: "1000px"}}>
                    <div className={classes.titleCareersFifthPart}>
                        {props?.careersInfo?.sections?.[2]?.attributes?.title}
                    </div>
                </div>
            </div>
            <div className={classes.photoCareersImgDiv}
                 style={{ 'background-image':
                         `url(${config.baseUrl}storage/${props?.careersInfo?.sections?.[2]?.attributes?.image})`}}>
                <div className="container">
                    <div className={classes.titleCareersFifthPart}>
                        {props?.careersInfo?.sections?.[2]?.attributes?.title}
                    </div>
                </div>
            </div>
        </>
    )
}


export default CareersFifthPart;