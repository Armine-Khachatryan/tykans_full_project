import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import config from "../../config";
import classes from './CandidatePrivacyPolicy.module.css';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";



function CandidatePrivacyPolicy(){


    const [candidatePrivacyPolicy, setCandidatePrivacyPolicy]=useState([]);
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);



    useEffect(() => {
        getCandidatePrivacyPolicyData();
    },[]);



    let getCandidatePrivacyPolicyData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=candidate-privacy-policy`);
            setCandidatePrivacyPolicy(response.data);

        } catch (error) {
            console.log(error.response, 'candidatePrivacyPolicy error');
        }
    }


    const renderCandidatePrivacyPolicy=candidatePrivacyPolicy?.blocks?.map((item,index)=>(
        <div key={index}>
            <div className={classes.title}>{item.attributes.subtitle}</div>
            <div className={classes.text}
                 dangerouslySetInnerHTML={{ __html:item.attributes?.description}}/>
        </div>
    ))


    return (
        <>
            <Header/>
            <div className="container">
                <div className={classes.mainTitle}>{candidatePrivacyPolicy?.blocks?.[0]?.attributes?.title}</div>
                {renderCandidatePrivacyPolicy}
            </div>
            <Footer/>
        </>
    )
}


export default CandidatePrivacyPolicy;