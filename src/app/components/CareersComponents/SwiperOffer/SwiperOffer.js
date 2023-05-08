import React from "react";
import config from "../../../config";
import { Swiper,  SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation }  from 'swiper';
import 'swiper/css';
import classes from './SwiperOffer.module.css';
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import "swiper/css/navigation";


export default (props) => {


    const renderOffersMobile=props?.whatOffer?.map((item, index)=>(
        <SwiperSlide>
            <div className={classes.offersWholeMobile} key={index}>
                <div className={classes.offersImgDivMobile}>
                    <img className={classes.offersImgMobile}
                         src={`${config.baseUrl}storage/` +`${item.attributes?.image}`} alt=""/>
                </div>
                <div className={classes.offersTextMobile}
                     dangerouslySetInnerHTML={{ __html: item.attributes.description }}/>
            </div>
        </SwiperSlide>
    ))


return (
        <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            keyboard={{ enabled: true }}
            modules={[Keyboard, Pagination, Navigation]}
            pagination={{
                clickable: true
            }}
            navigation={true}
            className="swiperOffer"
        >
            {renderOffersMobile}
        </Swiper>
    )
}