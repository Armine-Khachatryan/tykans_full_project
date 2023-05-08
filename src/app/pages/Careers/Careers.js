import React, {useState, useRef} from "react";
import {useEffect} from "react";
import axios from "axios";
import config from "../../config";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useLocation, useNavigate} from "react-router-dom";
import CareersFirstPage from "../../components/CareersComponents/CareersFirstPart/CareersFirstPart";
import CareersThirdPage from "../../components/CareersComponents/CareersThirdPart/CareersThirdPart";
import CareersFifthPart from "../../components/CareersComponents/CareersFifthPart/CareersFifthPart";
import CareersSixthPart from "../../components/CareersComponents/CareersSixthPart/CareersSixthPart";
import CareersSecondPage from "../../components/CareersComponents/CareersSecondPart/CareersSecondPart";
import CareersFourthPart from "../../components/CareersComponents/CareersFourthPart/CareersFourthPart";
import CareersSeventhPart from "../../components/CareersComponents/CareersSeventhPart/CareersSeventhPart";



function Careers() {

    const careerRef = useRef();
    const [careersInfo, setCareersInfo] = useState([]);
    const [jobInfo, setJobInfo] = useState([]);

    const navigate = useNavigate();
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }


    useEffect(() => {
        onTop()
    }, [routePath]);

    useEffect(() => {
        getCareersData();
        getJobData()
    }, []);


    const moveToTeamTestimonials = () => {
        navigate(`/life-at-tykans/team-testimonials`)
    }

    const moveToFAQ = () => {
        navigate('/careers/faq')
    }


    let getCareersData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=careers`);
            setCareersInfo(response.data);

        } catch (error) {
            console.log(error.response, 'careers error');
        }
    }


    let getJobData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/job`);
            setJobInfo(response.data);
        }
        catch (error) {
            console.log(error.response, 'job error');
        }
    }


    const showJobHandler=(index)=>{
        if(jobInfo[index].showJob){
           jobInfo[index].showJob = false
       }else {
           jobInfo[index].showJob = true
       }
        setJobInfo([...jobInfo])
    }
    

    return (
        <>
            <Header/>
            <CareersFirstPage careersInfo={careersInfo}/>
            <CareersSecondPage careersInfo={careersInfo}/>
            <CareersThirdPage careersInfo={careersInfo}/>
            <CareersFourthPart careersInfo={careersInfo}/>
            <CareersFifthPart careersInfo={careersInfo}/>
            <CareersSixthPart careersInfo={careersInfo} ref={careerRef} jobInfo={jobInfo}
                              onShowJobHandler={showJobHandler}/>
            <CareersSeventhPart careersInfo={careersInfo}
                moveToTeamTestimonials={moveToTeamTestimonials} moveToFAQ={moveToFAQ}/>
            <Footer/>
        </>
    )
}


export default Careers;