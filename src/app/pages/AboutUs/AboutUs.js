import React, {useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";
import classes from './AboutUs.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../../components/Header/Header";
import AboutUsComponent from "../../components/AboutUs/AboutUsComponent/AboutUsComponent";
import AboutUsInfo from "../../components/AboutUs/AboutUsInfo/AboutUsInfo";
import Leaders from "../../components/AboutUs/Leaders/Leaders";
import CoreValues from "../../components/AboutUs/CoreValues/CoreValues";
import NumbersData from "../../components/AboutUs/NumbersData/NumbersData";
import axios from "axios";
import config from "../../config";





function AboutUs() {

    const [aboutUsInfo, setAboutUsInfo]=useState([]);
    const [aboutUsInfo1, setAboutUs1Info]=useState([]);
    const [aboutUsInfo2, setAboutUs2Info]=useState([]);
    const navigate=useNavigate();
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);


    const moveToTeamTestimonialsPage =()=>{
        navigate(`/life-at-tykans/team-testimonials`)
    }


    useEffect(() => {
        getAboutUsData();
        getAboutUs1Data();
        getAboutUs2Data()
    },[]);


    let getAboutUsData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=about-us`)
            setAboutUsInfo(response.data);

        } catch (error) {
            console.log(error.response, 'aboutUsInfo error');
        }
    }

    let getAboutUs1Data = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=about-us-1`)
            setAboutUs1Info(response.data);

        } catch (error) {
            console.log(error.response, 'aboutUsInfo1 error');
        }
    }


    let getAboutUs2Data = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=about-us-2`)
            setAboutUs2Info(response.data);

        } catch (error) {
            console.log(error.response, 'aboutUsInfo2 error');
        }
    }


    return(

        <>
            <Header/>
            <AboutUsComponent aboutUsInfo={aboutUsInfo}/>
            <div className="container">
                <div className={classes.aboutUsTitle}>{aboutUsInfo?.sections?.[1].attributes?.title}</div>
                <div className={classes.aboutUsText}
                     dangerouslySetInnerHTML={{ __html:aboutUsInfo?.sections?.[1].attributes?.description}}/>
                <div className={classes.energyPartWhole}>
                    <div className={classes.energyLeft}>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyGreenTitle}>
                                {aboutUsInfo1?.sections?.[0]?.attributes?.title}</div>
                            <div className={classes.energyText}
                                 dangerouslySetInnerHTML=
                                     {{ __html:aboutUsInfo1?.sections?.[0]?.attributes?.description}}/>
                        </div>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyBlueTitle}>
                                {aboutUsInfo1?.sections?.[1]?.attributes?.title}</div>
                            <div className={classes.energyText}
                                 dangerouslySetInnerHTML=
                                     {{ __html:aboutUsInfo1?.sections?.[1]?.attributes?.description}}/>
                        </div>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyBlueTitle}>
                                {aboutUsInfo1?.sections?.[2]?.attributes?.title}</div>
                            <div className={classes.energyText}
                                 dangerouslySetInnerHTML=
                                     {{ __html:aboutUsInfo1?.sections?.[2]?.attributes?.description}}/>
                        </div>
                    </div>
                    <div className={classes.energyMiddle}>
                        <img
                            src={aboutUsInfo?.media?.[0]?.original_url} alt=""
                        />
                    </div>
                    <div className={classes.energyRight}>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyYellowTitle}>
                                {aboutUsInfo1?.sections?.[3]?.attributes?.title}</div>
                            <div className={classes.energyText}
                                 dangerouslySetInnerHTML=
                                     {{ __html:aboutUsInfo1?.sections?.[3]?.attributes?.description}}
                            />
                        </div>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyOrangeTitle}>
                                {aboutUsInfo1?.sections?.[4]?.attributes?.title}</div>
                            <div className={classes.energyText}
                                 dangerouslySetInnerHTML=
                                     {{ __html:aboutUsInfo1?.sections?.[4]?.attributes?.description}}/>
                        </div>
                        <div className={classes.energyDiv}>
                            <div className={classes.energyOrangeTitle}>
                                {aboutUsInfo1?.sections?.[5]?.attributes?.title}</div>
                            <div className={classes.energyText}
                                 dangerouslySetInnerHTML=
                                     {{ __html:aboutUsInfo1?.sections?.[5]?.attributes?.description}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CoreValues aboutUsInfo={aboutUsInfo}/>
            <AboutUsInfo aboutUsInfo={aboutUsInfo}/>
            <Leaders aboutUsInfo={aboutUsInfo}/>
            <NumbersData moveToTeamTestimonialsPage={moveToTeamTestimonialsPage}
                         aboutUsInfo={aboutUsInfo} aboutUsInfo2={aboutUsInfo2}/>
            <Footer/>
        </>

    )
}


export default AboutUs;