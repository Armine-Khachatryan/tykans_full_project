import React, {useEffect} from "react";
import config from "../../../config";
import {useLocation} from "react-router-dom";
import GreenVint from '../../../assets/images/aboutUs/GreenVint.png';
import YellowVint from '../../../assets/images/aboutUs/YellowVint.png';
import OrangeVint from '../../../assets/images/aboutUs/OrangeVint.png';
import classes from './Leaders.module.css';
import SwiperLeadership from "../SwiperLeadership/SwiperLeadership";



function Leaders(props) {

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);


    useEffect(() => {
        const leftGear = document.getElementById("greenAbout"),
            rightGear = document.getElementById("yellowAbout"),
            middleGear=document.getElementById("orangeAbout")

        window.addEventListener("scroll", function() {
            let value = window.scrollY * 0.3;
            leftGear.style.transform = `rotate(${value}deg)`;
            rightGear.style.transform = `rotate(${value}deg)`;
            middleGear.style.transform = `rotate(${value}deg)`;
        });
    },[]);

    const renderLeaders=props?.aboutUsInfo?.members?.map((item, index)=>(
        <div className={classes.leadersWhole} key={index}>
            <div className={classes.leftPartLeader}>
                <img className="circleBig"
                     src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
            </div>
            <div className={classes.rightPartLeader}>
                <div className={classes.titleLeader}>{item.attributes.membername}</div>
                <div className={classes.subTitleLeader}>{item.attributes.memberposition}</div>
                <div className={classes.textLeader}  dangerouslySetInnerHTML={{ __html: item.attributes.memberinfo}}/>
            </div>
        </div>
    ))

    return(
        <div className={classes.leaderBackground}>
            <div className="container">
                <div className={classes.leadersUpPart}>
                    <div className={classes.leadersUpLeft}>
                        <div className={classes.yellowTitle}>
                            {props?.aboutUsInfo?.sections?.[3]?.attributes?.title}</div>
                        <div className={classes.subTitleLeadersUpPart}
                             dangerouslySetInnerHTML=
                                 {{ __html:props?.aboutUsInfo?.sections?.[3]?.attributes?.description}}/>
                        </div>
                    <div className={classes.leadersUpRight}>
                        <div id={"yellowAbout"} className={classes.yellowVintDiv}>
                            <img src={YellowVint} alt=""/>
                        </div>
                        <div  id={"greenAbout"} className={classes.greenVintDiv}>
                            <img src={GreenVint} alt=""/>
                        </div>
                        <div  id={"orangeAbout"}  className={classes.orangeVintDiv}>
                            <img src={OrangeVint} alt=""/>
                        </div>
                    </div>
                </div>
                {renderLeaders}
                <div className={classes.renderLeadersMobile}>
                    <SwiperLeadership members={props?.aboutUsInfo?.members}/>
                </div>
            </div>
        </div>

    )
}


export default Leaders;