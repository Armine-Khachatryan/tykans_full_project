import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../../config";
import {useLocation} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



function PrivacyPolicy(){


    const [privacyPolicy, setPrivacyPolicy]=useState([]);
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);



    useEffect(() => {
        getPrivacyPolicyData();
    },[]);



    let getPrivacyPolicyData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=privacy-policy`);
            setPrivacyPolicy(response.data);
        } catch (error) {
            console.log(error.response, 'privacyPolicy error');
        }
    }


    const renderPrivacyPolicy=privacyPolicy?.blocks?.map((item,index)=>(
        <div key={index}>
            <div className="titlePolicy">{item.attributes.subtitle}</div>
            <div className="textPolicy"
                 dangerouslySetInnerHTML={{ __html:item.attributes?.description}}/>
        </div>
    ))


    return (
        <>
            <Header/>
                <div className="mainTitleAndDatePolicy">
                    <div className="container">
                        <div className="upperDivPolicy">
                            <div className="mainTitlePolicy">{privacyPolicy?.sections?.[0]?.attributes?.title}</div>
                            <div className="datePolicy"
                                 dangerouslySetInnerHTML=
                                     {{ __html:privacyPolicy?.sections?.[0]?.attributes?.description}}>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container">
                {renderPrivacyPolicy}
            </div>
            <Footer/>
        </>
    )
}


export default PrivacyPolicy;