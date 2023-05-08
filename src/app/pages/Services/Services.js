import React, {useState} from "react";
import classes from './Services.module.css';
import AOS from "aos";
import 'aos/dist/aos.css'
import axios from "axios";
import config from "../../config";
import { useEffect } from "react";
import Button from "../../UI/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useLocation, useNavigate} from "react-router-dom";
import Products from "../../components/ServicesComponents/Products/Products";
import CustomerTest from "../../components/ServicesComponents/CustomerTest/CustomerTest";
import ServiceTypes from "../../components/ServicesComponents/ServiceTypes/ServiceTypes";
import InformationList from "../../components/ServicesComponents/InformationList/InformationList";
import ServicesComponent from "../../components/ServicesComponents/ServicesComponent/ServicesComponent";
import ServicesInformation from "../../components/ServicesComponents/ServicesInformation/ServicesInformation";





function Services (){
    const [servicesInfo,setServicesInfo]=useState([]);
    const navigate=useNavigate();


    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);

    useEffect(() => {
        getServicesData();
        AOS.init();
    },[]);


    let getServicesData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=services`);
            setServicesInfo(response.data);

        } catch (error) {
            console.log(error.response, 'services error');
        }
    }

    const changeRoute = ()=>{
        navigate('/life-at-tykans/team-testimonials')
    }




    return(
        <>
            <Header/>
            <ServicesComponent servicesInfo={servicesInfo}/>
            <div className={classes.backgroundBlue}>
                <div className="container">
                    <div className={classes.containerInsideServices}>
                        <div
                            className={classes.LeftPartInnovation}>
                            <div className={classes.titleInnovation}>
                                {servicesInfo?.sections?.[1]?.attributes?.title}
                            </div>
                            <div className={classes.textInnovation}
                                 dangerouslySetInnerHTML={{ __html:
                                     servicesInfo?.sections?.[1].attributes?.description}}/>
                            <div className={classes.buttonsDiv}>
                                {/*<a className={classes.btnStyles} href="#products">Jump to Products</a>*/}
                                <Button color='#92374D'  OnClick={changeRoute}>Customer Testimonials</Button>
                            </div>
                        </div>
                        <div
                            className={classes.rightPartInnovation}>
                            <a href="#Migrate">
                                <div className={classes.migrateImgDiv}>
                                    <img className={classes.migrateImg}
                                         src={servicesInfo?.media?.[3]?.original_url} alt="migrate"/>
                                </div>
                            </a>
                            <a href="#Integrate">
                                <div className={classes.integrateImgDiv}>
                                    <img className={classes.integrateImg}
                                         src={servicesInfo?.media?.[2]?.original_url} alt="integrate"/>
                                </div>
                            </a>
                            <a href="#Create">
                                <div className={classes.createImgDiv}>
                                    <img className={classes.createImg}
                                         src={servicesInfo?.media?.[1]?.original_url} alt="create"/>
                                </div>
                            </a>
                            <a href="#Automate">
                                <div className={classes.automateImgDiv}>
                                    <img className={classes.automateImg}
                                         src={servicesInfo?.media?.[0]?.original_url} alt="automate"/>
                                </div>
                            </a>
                            <a href="#Operate">
                                <div className={classes.operateImgDiv}>
                                    <img className={classes.operateImg}
                                         src={servicesInfo?.media?.[4]?.original_url} alt="operate"/>
                                </div>
                            </a>


                        </div>
                        <div className={classes.rightPartInnovationMobile}>
                            <div className={classes.servicesDivMobile}>
                                <a href="#Migrate">
                                    <div className={classes.migrateDivMobile}>Migrate</div>
                                </a>
                                <a href="#Integrate">
                                    <div className={classes.integrateDivMobile}>Integrate</div>
                                </a>
                            </div>
                            <div className={classes.servicesDivCenterMobile}>
                                <a href="#Create">
                                    <div className={classes.createDivMobile}>Create</div>
                                </a>
                            </div>
                            <div className={classes.servicesDivMobile}>
                                <a href="#Automate">
                                    <div className={classes.automateDivMobile}>Automate</div>
                                </a>
                                <a href="#Operate">
                                    <div className={classes.operateDivMobile}>Operate</div>
                                </a>
                            </div>
                        </div>
                        <div className={classes.rightPartInnovationMobileForSwiper}>
                            <div className={classes.servicesDivMobile}>
                                <a>
                                    <div className={classes.migrateDivMobile}>Migrate</div>
                                </a>
                                <a>
                                    <div className={classes.integrateDivMobile}>Integrate</div>
                                </a>
                            </div>
                            <div className={classes.servicesDivCenterMobile}>
                                <a>
                                    <div className={classes.createDivMobile}>Create</div>
                                </a>
                            </div>
                            <div className={classes.servicesDivMobile}>
                                <a>
                                    <div className={classes.automateDivMobile}>Automate</div>
                                </a>
                                <a>
                                    <div className={classes.operateDivMobile}>Operate</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceTypes servicesInfo={servicesInfo} />
            <Products servicesInfo={servicesInfo} />
            <ServicesInformation servicesInfo={servicesInfo}/>
            <InformationList servicesInfo={servicesInfo}/>
            <CustomerTest servicesInfo={servicesInfo}/>
            <Footer/>
        </>
    )
}

export default Services;



