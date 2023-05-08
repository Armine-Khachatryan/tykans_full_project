import React, {useEffect, useState} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import axios from "axios";
import config from "../../config";
import classes from './Home.module.css';
import {useLocation} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeFifthPart from "../../components/HomePageComponents/HomeFifthPart/HomeFifthPart";
import HomeSeventhPart from "../../components/HomePageComponents/HomeSeventhPart/HomeSeventhPart";
import HomeSixthPartComponent from "../../components/HomePageComponents/HomeSixthPart/HomeSixthPart";
import HomeFirstComponent from "../../components/HomePageComponents/HomeFirstComponent/HomeFirstComponent";
import HomeThirdComponent from "../../components/HomePageComponents/HomeThirdComponent/HomeThirdComponent";
import HomeSecondComponent from "../../components/HomePageComponents/HomeSecondComponent/HomeSecondComponent";
import HomeFourthComponent from "../../components/HomePageComponents/HomeFourthPartComponent/HomeFourthPartComponent";



function Home() {

    const [homeInfo, setHomeInfo]=useState([]);
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop();
    }, [routePath]);

    useEffect(() => {
        getHomeData();
        AOS.init({
            disable: "768px"
        });
    },[]);

    let getHomeData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=home`);
            setHomeInfo(response.data);
        } catch (error) {
            console.log(error.response, 'home error');
        }
    }

    return(
        <>
            {homeInfo?.sections?.[0]?.attributes?.image?
                <>
                    <Header/>
                    <video className={classes.videoTag} autoPlay loop muted>
                        <source
                            src={`${config.baseUrl}storage/` +`${homeInfo?.sections?.[0]?.attributes?.image}`}
                            type='video/mp4' />
                    </video>
                    <HomeFirstComponent homeInfo={homeInfo}/>
                    <HomeSecondComponent homeInfo={homeInfo}/>
                    <HomeThirdComponent homeInfo={homeInfo}/>
                    <HomeFourthComponent homeInfo={homeInfo}/>
                    <HomeFifthPart homeInfo={homeInfo}/>
                    <HomeSixthPartComponent homeInfo={homeInfo}/>
                    <HomeSeventhPart homeInfo={homeInfo}/>
                    <Footer/>
                </>
               :
                <div><h1>...Loading</h1></div>
            }
        </>
    )
}


export default Home;
