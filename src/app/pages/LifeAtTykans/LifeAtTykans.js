import React, {useState} from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LifeCircles from "../../components/LifeAtTykans/LifeCircles/LifeCircles";
import LifeThirdPart from "../../components/LifeAtTykans/LifeThirdPart/LifeThirdPart";
import LifeFirstPart from "../../components/LifeAtTykans/LifeFirstPart/LifeFirstPart";
import LifeTeamMember from "../../components/LifeAtTykans/LifeTeamMember/LifeTeamMember";
import LifeSecondPart from "../../components/LifeAtTykans/LifeSecondPart/LifeSecondPart";
import LifeFourthPart from "../../components/LifeAtTykans/LifeFourthPart/LifeFourthPart";
import PhotoGalleryLife from "../../components/LifeAtTykans/PhotoGalleryLife/PhotoGalleryLife";
import PhotoGalleryLifeMobile from "../../components/LifeAtTykans/PhotoGaleryLifeMobile/PhotoGaleryLifeMobile";
import axios from "axios";
import config from "../../config";
import classes from './LifeAtTykans.module.css';



function LifeAtTykans (){

    const [lifeATTykansInfo, setLifeAtTykansInfo]=useState([]);

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);



    useEffect(() => {
        getlifeAtTykansData()
    },[]);


    let getlifeAtTykansData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=life-at-tykans`)
            setLifeAtTykansInfo(response.data);

        } catch (error) {
            console.log(error.response, 'life at tykans error');
        }
    }


    return(
        <>
            <Header/>
            <LifeFirstPart lifeATTykansInfo={lifeATTykansInfo}/>
            <LifeSecondPart lifeATTykansInfo={lifeATTykansInfo}/>
            <LifeThirdPart lifeATTykansInfo={lifeATTykansInfo}/>
            <LifeCircles lifeATTykansInfo={lifeATTykansInfo}/>
            <LifeFourthPart lifeATTykansInfo={lifeATTykansInfo}/>
            <LifeTeamMember lifeATTykansInfo={lifeATTykansInfo}/>
            <div className={classes.photoGallery}> <PhotoGalleryLife lifeATTykansInfo={lifeATTykansInfo}/></div>
            <div className={classes.photoMobile}>
                <PhotoGalleryLifeMobile lifeATTykansInfo={lifeATTykansInfo}/>
            </div>
            <Footer/>
        </>
    )
}


export default LifeAtTykans;