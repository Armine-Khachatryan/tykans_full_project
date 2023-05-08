import React from "react";
import config from "../../../config";
import { Swiper,  SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation }  from 'swiper';
import 'swiper/css';
import classes from './SwiperLeadership.module.css';
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import "swiper/css/navigation";




export default (props) => {

    const renderLeadersMobile=props?.members?.map((item, index)=>(
        <SwiperSlide>
            <div className={classes.leadersWholeMobile} key={index}>
                <div className={classes.leftPartLeaderMobile}>
                    <img className="circleBig"
                         src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
                </div>
                <div className={classes.rightPartLeaderMobile}>
                    <div className={classes.titleLeaderMobile}>{item.attributes.membername}</div>
                    <div className={classes.subTitleLeaderMobile}>{item.attributes.memberposition}</div>
                    <div className={classes.textLeaderMobile}
                         dangerouslySetInnerHTML={{ __html: item.attributes.memberinfo}}/>
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
            {renderLeadersMobile}
        </Swiper>
    )
}
