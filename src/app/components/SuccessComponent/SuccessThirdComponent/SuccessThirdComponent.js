// import React from "react";
// import Vector from '../../../assets/images/success/Vector.png';
// import Success5 from '../../../assets/images/success/Success5.png';
// import Success6 from '../../../assets/images/success/Success6.png';
// import classes from './SuccessThirdComponent.module.css';
//
//
//
// function SuccessThirdComponent(props){
//
//
//     const tykansAdvantages = props?.successPageInfo?.sections?.slice(3,7);
//
//
//     const renderTykansAdvantages=tykansAdvantages?.map((item,index)=>{
//         return(
//             <div className={classes.vectorAndTitle}>
//                 <img src={"https://4414.freelancedeveloper.site/storage/" +`${item.attributes.image}`}  alt=""/>
//                 <div className={classes.title}
//                      dangerouslySetInnerHTML={{ __html: item.attributes.description}}
//                 ></div>
//             </div>
//         )
//     })
//
//
//     return(
//         <div className={classes.backgroundAdvantage} style={{ 'background-image': `url(${Success6})`}}>
//             <div className="container">
//                 <div className={classes.tykansAdvantage}>
//                     <div>
//                         <div className={classes.advantage}>{props?.successPageInfo?.sections?.[2]?.attributes?.title}</div>
//                         {renderTykansAdvantages}
//                     </div>
//                     <div className={classes.rightPart}>
//                         <img className={classes.rightPartImg}
//                              src={"https://4414.freelancedeveloper.site/storage/" +`${props?.successPageInfo?.sections?.[2]?.attributes?.image}`}  alt=""/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//
//     )
// }
//
//
// export default SuccessThirdComponent;
