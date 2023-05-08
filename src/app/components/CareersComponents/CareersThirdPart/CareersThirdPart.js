import React from "react";
import config from "../../../config";
import BlueFrame from '../../../assets/images/BlueFrame.png';
import classes from './CareersThirdPart.module.css';



function CareersThirdPage (props){



    return(
        <div className={classes.blueFrame} style={{'background-image': `url(${BlueFrame})`}}>
            <div className="container">
                <div className={classes.frameInside}>
                    <div className={classes.whoImageDiv}>
                        <img className={classes.personImg}
                             src={`${config.baseUrl}storage/` +`${props?.careersInfo?.blocks?.[0]?.attributes?.image}`}
                             alt=""/>
                    </div>
                    <div className={classes.careersRightPart}>
                        <div className={classes.careersTitleThird}>
                            {props?.careersInfo?.blocks?.[0]?.attributes?.title}
                        </div>
                        <div className={classes.careersSubtitleThird}>
                            {props?.careersInfo?.blocks?.[0]?.attributes?.subtitle}
                        </div>
                        <div className={classes.careersText}
                             dangerouslySetInnerHTML=
                                 {{ __html: props?.careersInfo?.blocks?.[0]?.attributes?.description }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CareersThirdPage;