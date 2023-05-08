import React from "react";
import { Swiper,  SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation }  from 'swiper';
import 'swiper/css';
import config from "../../../config";
import classes from './SwiperMaverick.module.css';
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import "swiper/css/navigation";


export default (props) => {
    const renderCards = props?.cardInfo?.map((item, index)=>
        <SwiperSlide className={classes.swiperSlide}>
            <div className={classes.sliderInside}>
                <div
                    className={classes.cardInfo} key={index}>
                    <div className={classes.imgInfo}>
                        <img className="circleBig"
                             src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
                    </div>
                    <div className={classes.titleInfo}>{item.attributes.title}</div>
                    <div className={classes.textInfo}
                         dangerouslySetInnerHTML={{ __html: item.attributes.description }}/>
                </div>
            </div>
        </SwiperSlide>
    )


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
            className={"max-width mavrick"}
        >
            {renderCards}
        </Swiper>
    )
}