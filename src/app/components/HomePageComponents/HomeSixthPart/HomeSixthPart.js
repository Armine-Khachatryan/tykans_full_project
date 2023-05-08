import React, {useEffect} from "react";
import config from "../../../config";
import {useNavigate} from "react-router-dom";
import Button from "../../../UI/Button/Button";
import GreenVint from '../../../assets/images/home/BlueNew.png';
import OrangeVint from '../../../assets/images/home/OrangeNew.png';
import RedVint from '../../../assets/images/home/RedNew.png';
import classes from './HomeSixthPart.module.css';





function HomeSixthPartComponent(props){

    const navigate=useNavigate();

    useEffect(()=>{
        const leftGear = document.getElementById("greenHome5"),
            rightGear = document.getElementById("redHome5"),
            middleGear=document.getElementById("orangeHome5")
        window.addEventListener("scroll", function() {
            let value = window.scrollY * 0.3;
            leftGear.style.transform = `rotate(${value}deg)`;
            rightGear.style.transform = `rotate(${value}deg)`;
            middleGear.style.transform = `rotate(${value}deg)`;
        });
    },[]);

    return (
        <div className={classes.achieveGoalsWhole}>
            <div className="container">
                <div className={classes.achieveGoals}>
                    <div data-aos="fade-right"
                         data-aos-duration="1500"
                         data-aos-once="true"
                        className={classes.goalsLeft}>
                        <div className={classes.goalsTitle}>{props?.homeInfo?.blocks?.[8]?.attributes?.title}
                        <img className={classes.heartImg} src={`${config.baseUrl}storage/` +`${props?.homeInfo?.blocks?.[8]?.attributes?.image}`}
                             alt=""/> <span>
                                {props?.homeInfo?.blocks?.[8]?.attributes?.subtitle}</span>
                        </div>
                        <div className={classes.goalsSubTitle}>
                            {props?.homeInfo?.blocks?.[9]?.attributes?.subtitle}
                        </div>
                        <div className={classes.goalText}
                             dangerouslySetInnerHTML={{ __html:props?.homeInfo?.blocks?.[9]?.attributes?.description}}/>
                        <div className={classes.btnDiv}>
                            <Button color="#92374D" OnClick={()=>navigate(`/about-us`)}>See how we work</Button>
                        </div>
                    </div>
                    <div className={classes.goalsLeftMobile}>
                        <div className={classes.goalsTitle}>{props?.homeInfo?.blocks?.[8]?.attributes?.title}
                            <img className={classes.heartImg} src={`${config.baseUrl}storage/` +`${props?.homeInfo?.blocks?.[8]?.attributes?.image}`}
                                 alt=""/> <span>
                                {props?.homeInfo?.blocks?.[8]?.attributes?.subtitle}</span>
                        </div>
                        <div className={classes.goalsSubTitle}>
                            {props?.homeInfo?.blocks?.[9]?.attributes?.subtitle}
                        </div>
                        <div className={classes.goalText}
                             dangerouslySetInnerHTML={{ __html:props?.homeInfo?.blocks?.[9]?.attributes?.description}}/>
                        <div className={classes.btnDiv}>
                            <Button color="#92374D" OnClick={()=>navigate(`/about-us`)}>See how we work</Button>
                        </div>
                    </div>
                    <div data-aos="fade-left"
                         data-aos-duration="1500"
                         data-aos-once="true"
                    className={classes.fadeRight}>
                      <div className={classes.goalPicDiv}>
                          <img className={classes.goalPic}
                               src={`${config.baseUrl}storage/` +`${props?.homeInfo?.blocks?.[9]?.attributes?.image}`}
                               alt=""/>
                      </div>
                        <div>
                            <div id={"greenHome5"}  className={classes.greenVintDiv}>
                                <img src={GreenVint} alt=""/>
                            </div>
                            <div id={"redHome5"} className={classes.redVintDiv}>
                                <img src={RedVint} alt=""/>
                            </div>
                            <div  id={"orangeHome5"}  className={classes.orangeVintDiv}>
                                <img src={OrangeVint} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.fadeRightMobile}>
                        <div className={classes.goalPicDiv}>
                            <img className={classes.goalPic}
                                 src={`${config.baseUrl}storage/` +`${props?.homeInfo?.blocks?.[9]?.attributes?.image}`}
                                 alt=""/>
                        </div>
                        <div>
                            <div id={"greenHome5"}  className={classes.greenVintDiv}>
                                <img src={GreenVint} alt=""/>
                            </div>
                            <div id={"redHome5"} className={classes.redVintDiv}>
                                <img src={RedVint} alt=""/>
                            </div>
                            <div  id={"orangeHome5"}  className={classes.orangeVintDiv}>
                                <img src={OrangeVint} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSixthPartComponent;


