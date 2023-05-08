import React from "react";
import config from "../../../config";
import classes from './Query.module.css';


function Query (props){


    return(
        <div className={classes.queryWhole}>
            <div className={classes.queryLeft}>
                <img className={classes.imgQuery}
                     src={`${config.baseUrl}storage/` +`${props?.contactInfo?.blocks?.[0]?.attributes?.image}`}
                     alt=""/>
            </div>
            <div className={classes.queryRight}>
                <div className={classes.queryTitle}>{props?.contactInfo?.blocks?.[0]?.attributes?.title}</div>
                <div className={classes.queryText}>{props?.contactInfo?.blocks?.[0]?.attributes?.subtitle}</div>
            </div>
        </div>
    )
}


export default Query;

