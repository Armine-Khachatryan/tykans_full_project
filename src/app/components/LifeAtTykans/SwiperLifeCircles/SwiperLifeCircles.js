import React from "react";
import config from "../../../config";
import { Swiper,  SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation }  from 'swiper';
import 'swiper/css';
import classes from './SwiperLifeCircles.module.css';
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import "swiper/css/navigation";



export default (props) => {
    const renderLifeCirclesMobile=props?.circles?.map((item, index)=>(
        <SwiperSlide>
            <div className={classes.lifeTypesWholeMobile} key={index} id={item.attributes.title}>
                <div className={classes.titleCelebrateMobile}>{item.attributes.title}</div>
                <div className="subTitle centerText">{item.attributes.subtitle}</div>
                <div className={classes.textDivLife}>
                    <div className="textStyle" dangerouslySetInnerHTML={{ __html: item.attributes.description }}/>
                </div>
                <div className={classes.belowPartLifeTypes}>
                    <img className="circleBig"
                         src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
                </div>
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
            className={classes.width}
        >
            {renderLifeCirclesMobile}
        </Swiper>
    )
}