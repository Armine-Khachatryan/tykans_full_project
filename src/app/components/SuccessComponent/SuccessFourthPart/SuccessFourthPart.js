// import React from "react";
// import classes from './SuccessFourthPart.module.css';
// import Heart from "../../../assets/images/home/Heart.png";
// import Button from "../../../UI/Button/Button";
// import HomeImage4 from "../../../assets/images/home/HomeImage4.png";
// import GreenVint from "../../../assets/images/GreenVint.png";
// import RedVint from "../../../assets/images/RedVint.png";
// import OrangeVint from "../../../assets/images/OrangeVint.png";
// import {useNavigate} from "react-router-dom";
//
//
//
//
// function SuccessFourthPart(props){
//
//     const navigate=useNavigate();
//
//
//
//     return(
//         <div className="container">
//             <div className={classes.achieveGoals}>
//                 <div className={classes.goalsLeft}>
//                     <div className={classes.goalsTitle}>{props?.successPageInfo?.blocks?.[0]?.attributes?.title}
//                         {/*<span className={classes.heartDiv}><img src={Heart}/>you</span>*/}
//                     </div>
//                     <div className={classes.goalsSubTitle}>{props?.successPageInfo?.blocks?.[0]?.attributes?.subtitle}</div>
//                     <div className={classes.goalText}
//                          dangerouslySetInnerHTML={{ __html: props?.successPageInfo?.blocks?.[0].attributes?.description}}></div>
//                     <div className={classes.btnDiv}>
//                         <Button color="#92374D" OnClick={()=>navigate(`/about-us`)}>See how we work</Button>
//                     </div>
//                 </div>
//                 <div className={classes.goalsRight}>
//                     <div className={classes.goalPicDiv}>
//                         <img className={classes.goalPic}
//                              src={"https://4414.freelancedeveloper.site/storage/" +`${props?.successPageInfo?.blocks?.[0].attributes?.image}`}  alt=""/>
//                     </div>
//                     <div className={classes.vintDiv}>
//                         <div className={classes.greenVintDiv}>
//                             <img src={GreenVint}/>
//                         </div>
//                         <div className={classes.redVintDiv}>
//                             <img src={RedVint}/>
//                         </div>
//                         <div className={classes.orangeVintDiv}>
//                             <img src={OrangeVint}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default SuccessFourthPart;
//
//
