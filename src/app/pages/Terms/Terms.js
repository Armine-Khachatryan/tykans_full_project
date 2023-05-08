import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import config from "../../config";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



function Terms(){

    const [termsInfo, setTermsInfo]=useState([]);
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);


    useEffect(() => {
        getTermsData();
    },[]);


    let getTermsData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=terms`);
            setTermsInfo(response.data);

        } catch (error) {
            console.log(error.response, 'termsInfo error');
        }
    }


    const renderTerms=termsInfo?.blocks?.map((item,index)=>(
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
                        <div className="mainTitlePolicy">{termsInfo?.sections?.[0]?.attributes?.title}</div>
                        <div className="datePolicy"
                             dangerouslySetInnerHTML={{ __html:termsInfo?.sections?.[0]?.attributes?.description}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {renderTerms}
            </div>
            <Footer/>
        </>
    )
}


export default Terms;