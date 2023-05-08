// import React, {useEffect, useState} from "react";
// import {useLocation} from "react-router-dom";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import SuccessStories from "../../components/SuccessComponent/SuccessStories/SuccessStories";
// import SuccessFirstComponent from "../../components/SuccessComponent/SuccessFirstComponent/SuccessFirstComponent";
// import SuccessSecondComponent from "../../components/SuccessComponent/SuccessSecondComponent/SuccessSecondComponent";
// import SuccessThirdComponent from "../../components/SuccessComponent/SuccessThirdComponent/SuccessThirdComponent";
// import SuccessFourthPart from "../../components/SuccessComponent/SuccessFourthPart/SuccessFourthPart";
// import SuccessFifthPart from "../../components/SuccessComponent/SuccessFifthPart/SuccessFifthPart";
// import classes from './Success.module.css';
// import axios from "axios";
// import config from "../../config";
//
//
//
// function Success (){
//
//     const [successPageInfo, setSuccessPageInfo]=useState([])
//
//     const routePath = useLocation();
//     const onTop = () => {
//         window.scrollTo(0, 0);
//     }
//
//     useEffect(() => {
//         onTop()
//     }, [routePath]);
//
//
//     useEffect(() => {
//         getSuccessPageData();
//     },[]);
//
//     let getSuccessPageData = async () => {
//         try {
//             let response = await axios.get(`${config.baseUrl}api/pages?page=success-stories`);
//             console.log(response, "success-stories response")
//             console.log(response.data, "success-stories response.data");
//             setSuccessPageInfo(response.data);
//
//         } catch (error) {
//             console.log(successPageInfo)
//             console.log(error);
//             console.log(error.response, 'successPageInfo error');
//         }
//     }
//
//
//     return (
//         <>
//             <Header/>
//             <SuccessStories successPageInfo={successPageInfo}/>
//             <SuccessFirstComponent successPageInfo={successPageInfo}/>
//             <SuccessSecondComponent successPageInfo={successPageInfo}/>
//             <SuccessThirdComponent successPageInfo={successPageInfo}/>
//             <SuccessFourthPart successPageInfo={successPageInfo}/>
//             <div className={classes.fifthPart}>
//                 <SuccessFifthPart successPageInfo={successPageInfo}/>
//             </div>
//             <Footer/>
//         </>
//     )
// }
//
// export default Success;