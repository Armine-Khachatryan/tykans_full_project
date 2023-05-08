// import React from "react";
// import { Swiper,  SwiperSlide } from 'swiper/react';
// import { Keyboard, Pagination, Navigation }  from 'swiper';
// import 'swiper/css';
// import UpQuote from "../../../assets/images/home/UpQuote.png";
// import DownQuote from "../../../assets/images/home/DownQuote.png";
// import 'swiper/css/keyboard';
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import classes from './SuccessFifthPart.module.css';
//
//
//
// export default (props) => {
//
//     const renderSuccessSwiperData=props?.successPageInfo?.members?.map((item, index)=>(
//         <SwiperSlide>
//             <div className={classes.sliderInside}>
//                 <div className={classes.upComaDiv}>
//                     <img src={UpQuote}/>
//                 </div>
//                 <div className={classes.textSlider}
//                      dangerouslySetInnerHTML={{ __html: item.attributes.memberinfo}}></div>
//                 <div className={classes.downComaDiv}>
//                     <img src={DownQuote}/>
//                 </div>
//                 <div className={classes.nameSurname}>{item.attributes.membername}</div>
//                 <div className={classes.description}>{item.attributes.memberposition}</div>
//             </div>
//         </SwiperSlide>
//     ))
//
//
//     return (
//         <div className="container">
//             <Swiper
//                 slidesPerView={1}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//                 keyboard={{ enabled: true }}
//                 modules={[Keyboard, Pagination, Navigation]}
//                 pagination={{
//                     clickable: true
//                 }}
//                 navigation={true}
//                 className={classes.swiper}
//             >
//                 {renderSuccessSwiperData}
//             </Swiper>
//         </div>
//     );
// };