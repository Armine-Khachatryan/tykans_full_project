import React from "react";
import config from "../../../config";
import classes from './AboutUsInfo.module.css';



function AboutUsInfo(props){


    const aboutUsRender=props?.aboutUsInfo?.blocks?.map((item, index)=>(
        <div className={classes.valuesWhole} key={index}>
            <div className={classes.leftPartValues}>
                <img className="circleBig"
                     src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
            </div>
            <div className={classes.rightPartValues}>
                <div className={classes.titleValues}>{item.attributes.title}</div>
                <div className="subTitle">{item.attributes.subtitle}</div>
                <div className="textStyle" dangerouslySetInnerHTML={{ __html: item.attributes.description }}/>
            </div>
        </div>
    ))



    return(
        <div className="container">
            {aboutUsRender}
        </div>
    )
}


export default AboutUsInfo;