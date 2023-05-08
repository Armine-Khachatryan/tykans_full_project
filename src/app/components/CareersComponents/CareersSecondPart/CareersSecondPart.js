import React, {useEffect} from "react";
import YellowVint from "../../../assets/images/YellowVint.png";
import GreenVint from "../../../assets/images/GreenVint.png";
import OrangeVint from "../../../assets/images/OrangeVint.png";
import classes from './CareersSecondPart.module.css';

function CareersSecondPage (props) {

    useEffect(()=>{
        const leftGear = document.getElementById("yellowCareers2"),
            rightGear = document.getElementById("orangeCareers2"),
            middleGear=document.getElementById("greenCareers2")

        window.addEventListener("scroll", function() {
            let value = window.scrollY * 0.3;
            leftGear.style.transform = `rotate(${value}deg)`;
            rightGear.style.transform = `rotate(${value}deg)`;
            middleGear.style.transform = `rotate(${value}deg)`;
        });
    },[])


    return(
        <div className="container">
            <div className={classes.insideCareersDiv}>
                    <div className={classes.insideCareersLeft}>
                        <div className={classes.insideCareersTitle}>
                            {props?.careersInfo?.sections?.[1]?.attributes?.title}
                        </div>
                        <div className={classes.insideCareersText}
                             dangerouslySetInnerHTML=
                                 {{ __html: props?.careersInfo?.sections?.[1]?.attributes?.description }}>
                        </div>
                        <a className={classes.btnStyle} href="#explore">
                          Explore open roles</a>
                    </div>
                <div className={classes.insideCareersRight}>
                    <div className={classes.careers2ImgDiv}>
                        <div id={"yellowCareers2"} className={classes.yellowVint}>
                            <img  src={YellowVint} alt=""/>
                        </div>
                        <div id={"greenCareers2"} className={classes.greenVint}>
                            <img  src={GreenVint} alt=""/>
                        </div>
                        <div id={"orangeCareers2"} className={classes.orangeVint}>
                            <img src={OrangeVint} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CareersSecondPage;

