import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../../config";
import {useLocation} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LetsTalk from "../../components/ContactUsComponent/LetsTalk/LetsTalk";
import ContactForm from "../../components/ContactUsComponent/ContactForm/ContactForm";
import ContactUsBelowPart from "../../components/ContactUsComponent/ContactUsBelowPart/ContactUsBelowPart";




function ContactUs() {

    const [contactInfo,setContactInfo]=useState([]);

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);


    useEffect(() => {
        getContactData();
    },[]);


    let getContactData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=contact-us`);
            setContactInfo(response.data);

        } catch (error) {
            console.log(error.response, 'contactInfo error');
        }
    }


    return(

        <>
            <Header/>
            <LetsTalk contactInfo={contactInfo}/>
            <ContactForm contactInfo={contactInfo}/>
            <ContactUsBelowPart contactInfo={contactInfo}/>
            <Footer/>
        </>
    )
}


export default ContactUs;