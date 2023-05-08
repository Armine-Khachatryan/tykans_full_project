import React from "react";
import classes from './ServicesInformation.module.css';



function ServicesInformation(props) {

    return (
        <div className={classes.wholeDiv}>
            <div className="container">
                <div className={classes.center}>
                    <div className={classes.titleInfoPart}>{props?.servicesInfo?.sections?.[3].attributes?.title}</div>
                    <div className={classes.textInfoPart}
                         dangerouslySetInnerHTML=
                             {{ __html: props?.servicesInfo?.sections?.[3].attributes?.description}}/>
                </div>
            </div>
        </div>
    )
}

export default ServicesInformation;