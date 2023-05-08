import React from "react";
import { Swiper,  SwiperSlide } from 'swiper/react';
import classes from './PhotoGaleryLifeMobile.module.css';
import 'swiper/css';
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Keyboard, Navigation, Pagination} from "swiper";


function PhotoGalleryLifeMobile(props){

    const mediaPhotoGalleryInfo=props?.lifeATTykansInfo?.media;
    const mediaPhotoGalleryResult=mediaPhotoGalleryInfo?.filter(item =>item.collection_name==="multiply_images2");


    return(
        <div className="container">
            <div className={classes.galleryTitleMobile}>Photo Gallery</div>
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
                navigation={true}
                className="swiperOffer"
            >
                <SwiperSlide>
                    <div className={classes.photosMobile}>
                        <div className={classes.photo1divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[0]?.original_url} alt=""
                            /></div>
                        <div className={classes.photo2divMobile}>
                                    <img className={classes.photo1}
                                         src={mediaPhotoGalleryResult?.[1]?.original_url} alt=""
                                    />
                                </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.photosMobile}>
                        <div className={classes.photo1divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[2]?.original_url} alt=""
                            /></div>
                        <div className={classes.photo2divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[3]?.original_url} alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.photosMobile}>
                        <div className={classes.photo1divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[4]?.original_url} alt=""
                            /></div>
                        <div className={classes.photo2divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[5]?.original_url} alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.photosMobile}>
                        <div className={classes.photo1divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[6]?.original_url} alt=""
                            /></div>
                        <div className={classes.photo2divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[7]?.original_url} alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.photosMobile}>
                        <div className={classes.photo1divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[8]?.original_url} alt=""
                            /></div>
                        <div className={classes.photo2divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[9]?.original_url} alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.photosMobile}>
                        <div className={classes.photo1divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[10]?.original_url} alt=""
                            /></div>
                        <div className={classes.photo2divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[11]?.original_url} alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.photosMobile}>
                        <div className={classes.photo1divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[12]?.original_url} alt=""
                            /></div>
                        <div className={classes.photo2divMobile}>
                            <img className={classes.photo1}
                                 src={mediaPhotoGalleryResult?.[13]?.original_url} alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}


export default PhotoGalleryLifeMobile;