import React from "react";
import config from "../../../config";
import SwiperOffer from "../SwiperOffer/SwiperOffer";
import classes from './CareersFourthPart.module.css';



function CareersFourthPart (props){

    const whatOffer =props?.careersInfo?.blocks?.slice(2,8);

    const renderOffers=whatOffer?.map((item, index)=>(
        <div className={classes.offersWhole} key={index}>
            <div className={classes.offersImgDiv}>
                <img className={classes.offersImg} src={`${config.baseUrl}storage/` +`${item.attributes?.image}`}
                     alt=""/>
            </div>
            <div className={classes.offersText}
                 dangerouslySetInnerHTML={{ __html: item.attributes.description }}/>
        </div>
    ))

    return(
        <div className={classes.fourthPartWhole}>
            <div className={classes.fourthPartTitle}>{props?.careersInfo?.blocks?.[1]?.attributes?.title}</div>
            <div className={classes.fourthPartSubtitle}>{props?.careersInfo?.blocks?.[1]?.attributes?.subtitle}</div>
            <div className={classes.offersDiv}>
                {renderOffers}
            </div>
            <div className={classes.offersDivMobile}>
                <SwiperOffer whatOffer={whatOffer}/>
            </div>
        </div>
    )
}


export default CareersFourthPart;