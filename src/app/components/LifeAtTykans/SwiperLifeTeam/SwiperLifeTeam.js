import { Swiper,  SwiperSlide } from 'swiper/react';
import {useNavigate} from "react-router-dom";
import config from "../../../config";
import {Pagination, Navigation, Keyboard} from 'swiper';
import classes from './SwiperLifeTeam.module.css';
import 'swiper/css';
import UpComa from '../../../assets/images/lifeEtTykans/UpComa.png';
import Button from "../../../UI/Button/Button";
import DownComa from "../../../assets/images/lifeEtTykans/DownComa.png";
import React from "react";
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import "swiper/css/navigation";





export default function SwiperLifeTeam (props){

    const navigate= useNavigate();
    const renderMembers=props?.lifeATTykansInfo?.members?.map((item, index)=>(
        <SwiperSlide>
            <div className={classes.wholeMembers} key={index}>
                <img className={classes.upComa} src={UpComa} alt=""/>
                <div className={classes.memberInfo}>
                    <div className={classes.member}>
                        <div className={classes.personIfo}>
                            <img className={classes.personImg}
                                src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
                            <div className={classes.personName}>{item.attributes.membername}</div>
                            <div className={classes.personPosition}>{item.attributes.memberposition}</div>
                        </div>
                    </div>
                    <div className={classes.textAndButtons}>
                        <div className={classes.textInfo}>{item.attributes.memberinfo}</div>
                        <div className={classes.buttonsLife}>
                            <div className={classes.firstButton}>
                                <Button color='#92374D' OnClick={()=>navigate(`team-testimonials`)}>Read more</Button>
                            </div>
                            <Button color='#92374D'  OnClick={()=>navigate(`/careers`)}>Explore Careers</Button>
                        </div>
                    </div>
                </div>
                <img className={classes.downComa} src={DownComa} alt=""/>
            </div>
        </SwiperSlide>
    ))

    return (
        <Swiper
            spaceBetween={24}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            mousewheel={true}
            keyboard={{ enabled: true }}
            modules={[Keyboard, Pagination, Navigation]}
            pagination={{
                clickable: true
            }}
            className={classes.lifeSwiper}
            navigation={true}
        >
            {renderMembers}
        </Swiper>
    );
};