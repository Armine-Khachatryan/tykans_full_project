import React from "react";
import config from "../../../config";
import classes from './CoreValues.module.css';



function CoreValues(props) {

    return (
        <>
            <div className={classes.coreBackImg}>
                <div className={classes.coreFrameDiv}
                     style={{ 'background-image':
                             `url(${config.baseUrl}storage/${props?.aboutUsInfo?.sections?.[2].attributes?.image})`}}>
                    <div className="container">
                        <div className={classes.titleCore}>{props?.aboutUsInfo?.sections?.[2].attributes?.title}</div>
                    </div>
                </div>
            </div>
            <div className={classes.coreImgDiv}
                 style={{ 'background-image':
                         `url(${config.baseUrl}storage/${props?.aboutUsInfo?.sections?.[2].attributes?.image})`}}>
                <div className="container">
                    <div className={classes.titleCore}>{props?.aboutUsInfo?.sections?.[2].attributes?.title}</div>
                </div>
            </div>
        </>
    )
}


export default CoreValues;
