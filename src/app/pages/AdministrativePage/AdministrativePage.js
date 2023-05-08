import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Administrative from "../../components/Administrative/Administrative";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import config from "../../config";




function AdministrativePage () {

    const [administrativePageInfo, setAdministrativePageInfo] = useState([]);
    const [jobView, setJobView]=useState({});
    const { state } = useLocation();
    const routePath = useLocation();
    const id=state;



    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);

    useEffect(() => {
        getJobView(id);
        getAdministrativePageData()
    }, []);



    let getAdministrativePageData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=administrative-page`);
            setAdministrativePageInfo(response.data);
        } catch (error) {
            console.log(error.response, 'administrativePageInfo error');
        }
    }

    let getJobView = async (id) => {
        try {
            let response = await axios.get(`${config.baseUrl}api/job/show/?id=${id}`);
            setJobView(response.data);
        }
        catch (error) {
            console.log(error.response, 'job view error');
        }
    }


    return(
        <>
            <Header jobId={id}/>
            <div className="part1BackImg"
                 style={{ 'background-image':
                         `url(${config.baseUrl}storage/${administrativePageInfo?.sections?.[0]?.attributes?.image})`}}
            />
            <Administrative jobView={jobView} id={id} administrativePageInfo={administrativePageInfo}/>
            <Footer/>
        </>
    )
}


export default AdministrativePage;