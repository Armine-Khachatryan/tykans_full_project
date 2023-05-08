import React, {useState} from "react";
import axios from "axios";
import config from "../../config";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamTestFirstPart from "../../components/TeamTest/TeamTestFirstPart/TeamTestFirstPart";
import TeamTestMembers from "../../components/TeamTest/TeamTestMembers/TeamTestMembers";
import TeamTestLastPart from "../../components/TeamTest/TeamTestLastPart/TeamTestLastPart";



function TeamTestimonialsPage () {

    const [teamInfo,setTeamInfo]=useState([]);



    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);


    useEffect(() => {
        getTeamData()
    },[]);


    let getTeamData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=team-testimonials`)
            setTeamInfo(response.data);

        } catch (error) {
            console.log(error.response, 'teamTestimonials error');
        }
    }



    return (
        <>
            <Header/>
            <TeamTestFirstPart teamInfo={teamInfo}/>
            <TeamTestMembers teamInfo={teamInfo}/>
            <TeamTestLastPart teamInfo={teamInfo}/>
            <Footer/>
        </>
    )
}

export default TeamTestimonialsPage;