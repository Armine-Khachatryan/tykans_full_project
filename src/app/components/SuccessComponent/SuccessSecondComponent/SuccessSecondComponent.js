// import React, {useState} from "react";
// import classes from './SuccessSecondComponent.module.css';
// import Success2 from "../../../assets/images/success/Success2.png";
// import Success3 from '../../../assets/images/success/Success3.png';
// import Success4 from '../../../assets/images/success/Success4.png';
// import Arrow from '../../../assets/images/success/Arrow.png';
// import {show} from "react-modal/lib/helpers/ariaAppHider";
//
//
//
// function SuccessSecondComponent(props){
//
//
//     const [showOutcome,setShowOutcome]=useState({});
//
//     const toggleOutCome = index => {
//         setShowOutcome(prevShowOutCome =>({
//             ...prevShowOutCome,
//             [index]:!prevShowOutCome[index]
//         }));
//     }
//
//
//     // className={`myProfileDivs   ${showBlue === 'created' ? "part" : ""} `}
//
//     const renderSuccessInfo=props?.successPageInfo?.second_blocks?.map((item, index)=>
//         <div className={classes.successCard} key={index}>
//             <div className="container">
//                 <div className={classes.successInfo}>
//                     <div className={classes.imgDiv}>
//                         <img className={classes.successImg}
//                              src={"https://4414.freelancedeveloper.site/storage/" +`${item.attributes.image}`} alt=""/>
//                     </div>
//                     <div>
//                         <div className={classes.successCardTitle}>{item.attributes.title}</div>
//                         <div className={classes.cardBelowPart}>
//                             <div className={classes.cardLeft}>
//                                 <div className={classes.arrowAndBtn} onClick={()=>toggleOutCome(index)}>
//                                     <img className={classes.arrowImg} src={Arrow} alt=""/>
//                                     <div
//                                         className={`${classes.btn} ${showOutcome[index] ? classes.grey : classes.blue} `}
//                                         // className={classes.btn}
//                                     >{item.attributes.subtitle_first}</div>
//                                 </div>
//                                 <div className={classes.infoText}
//                                      dangerouslySetInnerHTML={{ __html: item.attributes.description_first}}
//                                 ></div>
//                             </div>
//                             <div className={classes.cardRight}>
//                                 <div className={classes.arrowAndBtn}>
//                                     <img className={classes.arrowImg} src={Arrow} alt=""/>
//                                     <div
//                                         className={`${classes.btn} ${showOutcome[index] ? classes.blue : classes.grey} `}
//                                     >{item.attributes.subtitle_second}</div>
//                                 </div>
//                                 {showOutcome[index] &&  <div className={classes.infoText} dangerouslySetInnerHTML={{ __html: item.attributes.description_second}}></div>}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
//
//
//
//
//
//     return(
//         <>
//             {renderSuccessInfo}
//         </>
//     )
// }
//
//
// export default SuccessSecondComponent;