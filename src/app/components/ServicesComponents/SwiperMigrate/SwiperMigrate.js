import React from "react";
import config from "../../../config";
import { Swiper,  SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation }  from 'swiper';
import 'swiper/css';
import classes from './SwiperMigrate.module.css';
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../../../UI/Button/Button";
import {useNavigate} from "react-router-dom";




export default (props) => {
    const navigate=useNavigate();

    const renderServices=props?.services?.map((item, index)=>(
        <SwiperSlide>
            <div className={classes.serviceTypesWhole} key={index} id={item.attributes.title}>
                <div className={classes.titleServiceTypesMobile}>{item.attributes.title}</div>
                <div className="subTitle centerText">{item.attributes.subtitle}</div>
                <div className={classes.textDiv}>
                    <div style={{marginBottom:"0"}} className="textStyle" dangerouslySetInnerHTML={{ __html: item.attributes.description }}/>
                </div>
                {/*<div className={classes.readMoreMobile}*/}
                {/*    onClick={()=>props.switchForModal(item.attributes.slug)}>*/}
                {/*    <img className="blueBookImg" src={BlueBook} alt=""/>Read More</div>*/}
                <div className={classes.btnDiv}>
                    <Button color="#26225A" OnClick={()=>navigate(`/contact-us`)}>Let’s talk migration solutions
                    </Button>
                </div>
            </div>
                <div className={classes.belowPartServiceTypes}>
                    <img className="circleBig"
                         src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
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
            {renderServices}
        </Swiper>
    )
}