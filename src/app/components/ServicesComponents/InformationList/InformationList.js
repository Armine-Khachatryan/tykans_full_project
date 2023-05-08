import React from "react";
import config from "../../../config";
import classes from './InformationList.module.css';
import SwiperMaverick from "../SwiperMaverick/SwiperMaverick";





function InformationList(props) {

    const cardInfo = props?.servicesInfo?.blocks?.slice(5,8);


    const renderCards = cardInfo?.map((item, index)=>
                <div className={classes.cardInfo} key={index}>
                    <div className={classes.imgInfo}>
                        <img className="circleBig"
                             src={`${config.baseUrl}storage/`  +`${item.attributes.image}`} alt=""/>
                    </div>
                    <div className={classes.titleInfo}>{item.attributes.title}</div>
                    <div className={classes.textInfo}
                         dangerouslySetInnerHTML={{ __html: item.attributes.description }}/>
                </div>
            )

    return (
        <div className="container">
            <div className={classes.allInOne}>
                {renderCards}
            </div>
            <div className={classes.allInOneMobile}>
                <SwiperMaverick cardInfo={cardInfo}/>
            </div>
        </div>
    )
}
export default InformationList;