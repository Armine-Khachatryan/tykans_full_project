import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import FAQFirstPage from "../../components/FAQ/FAQFirstPage/FAQFirstPage";
import FAQSecondPage from "../../components/FAQ/FAQSecondPage/FAQSecondPage";
import FAQThirdPart from "../../components/FAQ/FAQThirdPart/FAQThirdPart";
import Footer from "../../components/Footer/Footer";
import {useLocation} from "react-router-dom";
import axios from "axios";
import config from "../../config";



function FAQ (){

    const [faqInfo, setFaqPageInfo]=useState([])

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);

    useEffect(() => {
        getFAQPageData();
    },[]);

    let getFAQPageData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=FAQ`);
            setFaqPageInfo(response.data);

        } catch (error) {
            console.log(error.response, 'faqInfo error');
        }
    }


    return(
        <>
            <Header/>
            <FAQFirstPage faqInfo={faqInfo}/>
            <FAQSecondPage faqInfo={faqInfo}/>
            <FAQThirdPart faqInfo={faqInfo}/>
            <Footer/>
        </>
    )
}


export default FAQ;