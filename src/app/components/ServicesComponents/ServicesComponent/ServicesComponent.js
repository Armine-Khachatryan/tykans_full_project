import React from "react";
import classes from './ServicesComponent.module.css';
import config from "../../../config";





function ServicesComponent(props) {

    return(
        <div className={classes.part1BackImgService}
             style={{ 'background-image':
                     `url(${config.baseUrl}storage/${props?.servicesInfo?.sections?.[0].attributes?.image})`}}>
            <div className="container">
                <div className="titleServices">{props?.servicesInfo?.sections?.[0].attributes?.title}</div>
            </div>
        </div>
    )
}


export default ServicesComponent;