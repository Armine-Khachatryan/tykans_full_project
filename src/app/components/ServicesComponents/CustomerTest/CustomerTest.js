import React from "react";
import Swiper from "../Swiper/Swiper";
import classes from './CustomerTest.module.css';




function CustomerTest(props) {


    return(
        <div className={classes.customerTestWhole}>
            <div className="container">
                <div className={classes.customerTitle}>{props?.servicesInfo?.sections?.[4].attributes?.title}</div>
                <Swiper servicesInfo={props.servicesInfo}/>
            </div>
        </div>
    )
}


export default CustomerTest;