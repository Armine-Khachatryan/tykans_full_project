import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../../UI/Button/Button";
import YellowVint from '../../../assets/images/home/YellowNew.png';
import classes from './HomeFourthPartComponent.module.css';




function HomeFourthComponent(props){

    const navigate=useNavigate();
    const homeImages1 = props?.homeInfo?.media;
    const homeImages1Result=homeImages1?.filter(item =>item.collection_name==="multiply_images");

    useEffect(()=>{
        const leftGear = document.getElementById("yellowHome3")
        window.addEventListener("scroll", function() {
            let value = window.scrollY * 0.6;
            leftGear.style.transform = `rotate(${value}deg)`;
        });
    },[]);


    return (
        <div className={classes.fourthPartWhole}>
            <div className="container">
                <div className={classes.fourthPart}>
                    <div data-aos="fade-right"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        className={classes.fourthPartLeft}>
                        <div className={classes.fourthPartTitle}>{props?.homeInfo?.blocks?.[6]?.attributes?.title}</div>
                        <div className={classes.fourthPartSubTitle}>
                            {props?.homeInfo?.blocks?.[6]?.attributes?.subtitle}
                        </div>
                        <div className={classes.fourthPartText}
                             dangerouslySetInnerHTML={{ __html:props?.homeInfo?.blocks?.[6]?.attributes?.description}}/>
                        <div className={classes.btnDiv}>
                            <Button color="#92374D" OnClick={()=>navigate(`/life-at-tykans`)}>See how we work</Button>
                        </div>
                    </div>
                    <div className={classes.fourthPartLeftMobile}>
                        <div className={classes.fourthPartTitle}>{props?.homeInfo?.blocks?.[6]?.attributes?.title}</div>
                        <div className={classes.fourthPartSubTitle}>{props?.homeInfo?.blocks?.[6]?.attributes?.subtitle}
                        </div>
                        <div className={classes.fourthPartText}
                             dangerouslySetInnerHTML={{ __html:props?.homeInfo?.blocks?.[6]?.attributes?.description}}/>
                        <div className={classes.btnDiv}>
                            <Button color="#92374D" OnClick={()=>navigate(`/life-at-tykans`)}>See how we work</Button>
                        </div>
                    </div>
                    <div data-aos="fade-left"
                         data-aos-duration="1500"
                         data-aos-once="true"
                        className={classes.fourthPartRight}>
                        <div id={"yellowHome3"} className={classes.yellowVintDiv}>
                            <img
                                src={YellowVint} alt=""/>
                        </div>
                        <div className={classes.picDivs}>
                            <div className={classes.picDivsUp}>
                                <div className={classes.homeImg1Div}>
                                    <img className={classes.homeImg1}
                                         src={homeImages1Result?.[0]?.original_url} alt=""/>
                                </div>
                                <div className={classes.homeImg2Div}>
                                    <img className={classes.homeImg2}
                                         src={homeImages1Result?.[1]?.original_url} alt=""/>
                                </div>
                            </div>
                            <div className={classes.homeImg3Div}>
                                <img className={classes.homeImg3}
                                     src={homeImages1Result?.[2]?.original_url} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.fourthPartRightMobile}>
                        <div id={"yellowHome3"} className={classes.yellowVintDiv}>
                            <img src={YellowVint} alt=""/>
                        </div>
                        <div className={classes.picDivs}>
                            <div className={classes.picDivsUp}>
                                <div className={classes.homeImg1Div}>
                                    <img className={classes.homeImg1}
                                         src={homeImages1Result?.[0]?.original_url} alt=""/>
                                </div>
                                <div className={classes.homeImg2Div}>
                                    <img className={classes.homeImg2}
                                         src={homeImages1Result?.[1]?.original_url} alt=""/>
                                </div>
                            </div>
                            <div className={classes.homeImg3Div}>
                                <img className={classes.homeImg3}
                                     src={homeImages1Result?.[2]?.original_url} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomeFourthComponent;