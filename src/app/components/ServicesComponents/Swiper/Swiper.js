import React from "react";
import { Swiper,  SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation }  from 'swiper';
import 'swiper/css';
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/keyboard';
import classes from './Swiper.module.css';
import UpQuote from "../../../assets/images/home/UpQuote.png";
import DownQuote from "../../../assets/images/home/DownQuote.png";



export default (props) => {

    const renderHomeMembers=props?.servicesInfo?.members?.map((item, index)=>(
        <SwiperSlide>
            <div className={classes.sliderInside} key={index}>
                <div className={classes.upComaDiv}>
                    <img src={UpQuote} alt=""/>
                </div>
                <div className={classes.textSlider}
                     dangerouslySetInnerHTML={{ __html: item.attributes.memberinfo}}/>
                <div className={classes.downComaDiv}>
                    <img src={DownQuote} alt=""/>
                </div>
                <div className={classes.nameSurname}>{item.attributes.membername}</div>
                <div className={classes.description}>{item.attributes.memberposition}</div>
            </div>
        </SwiperSlide>))



    return (
        <Swiper
            spaceBetween={90}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            keyboard={{ enabled: true }}
            modules={[Keyboard, Pagination, Navigation]}
            pagination={{
                clickable: true
            }}
            navigation={true}
            className={classes.swiperCustomerTestimonials}
        >
            {renderHomeMembers}
        </Swiper>
    );
};