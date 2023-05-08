import React, {useEffect} from "react";
import Button from "../../../UI/Button/Button";
import config from "../../../config";
import classes from './TeamTestLastPart.module.css';
import YellowVint from "../../../assets/images/YellowVint.png";
import GreenVint from "../../../assets/images/GreenVint.png";
import OrangeVint from "../../../assets/images/OrangeVint.png";
import RedVint from "../../../assets/images/RedVint.png";
import BlueVint from "../../../assets/images/BlueVint.png";
import {useNavigate} from "react-router-dom";



function TeamTestLastPart (props){

    const navigate=useNavigate();

    useEffect(()=>{
        const leftGearBlue = document.getElementById("leftBlue"),
            leftGearRed =  document.getElementById("leftRed"),
            leftGearOrange = document.getElementById("leftOrange"),
            rightGearOrange = document.getElementById("rightOrange"),
            rightGearYellow = document.getElementById("rightYellow"),
            rightGearGreen = document.getElementById("rightGreen")



        window.addEventListener("scroll", function() {
            let value = window.scrollY * 0.3;
            leftGearBlue.style.transform = `rotate(${value}deg)`;
            leftGearRed.style.transform = `rotate(${value}deg)`;
            leftGearOrange.style.transform = `rotate(${value}deg)`;
            rightGearOrange.style.transform = `rotate(${value}deg)`;
            rightGearYellow.style.transform = `rotate(${value}deg)`;
            rightGearGreen.style.transform = `rotate(${value}deg)`;
        });
    },[]);



    return(
            <div className={classes.teamTestWhole}>
                <div className="container">
                    <div className={classes.testTestPart}>
                        <div className={classes.leftMechanism}>
                            <div  id={"leftRed"} className={classes.redVint}>
                                <img src={RedVint} alt=""/>
                            </div>
                            <div  id={"leftOrange"} className={classes.orangeSmallVint}>
                                <img src={OrangeVint} alt=""/>
                            </div>
                            <div id={"leftBlue"} className={classes.blueVint}>
                                <img src={BlueVint} alt=""/>
                            </div>
                        </div>
                        <div className={classes.middleImgDiv}
                             style={{ 'background-image':
                                     `url(${config.baseUrl}storage/${props?.teamInfo?.sections?.[1].attributes?.image})`}}>
                            <Button color='#92374D' OnClick={()=>navigate(`/careers`)}>Explore Careers</Button>
                        </div>
                        <div className={classes.rightMechanism}>
                            <div  id={"rightYellow"} className={classes.yellowVint}>
                                <img  src={YellowVint} alt=""/>
                            </div>
                            <div  id={"rightGreen"} className={classes.greenVint}>
                                <img   src={GreenVint} alt=""/>
                            </div>
                            <div id={"rightOrange"} className={classes.orangeVint}>
                                <img  src={OrangeVint} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default TeamTestLastPart;