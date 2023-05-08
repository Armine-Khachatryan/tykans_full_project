import React, {useEffect} from "react";
import config from "../../../config";
import {useNavigate} from "react-router-dom";
import Button from "../../../UI/Button/Button";
import RedVint from "../../../assets/images/home/RedNew.png";
import BlueVint from "../../../assets/images/home/BlueNew.png";
import classes from './HomeSecondComponent.module.css';




function HomeSecondComponent(props){

    const navigate=useNavigate();
    useEffect(()=>{
        const  rightGear = document.getElementById("orangeHome2"),
            middleGear=document.getElementById("greenHome2")
        window.addEventListener("scroll", function() {
            let value = window.scrollY * 0.3;
            rightGear.style.transform = `rotate(${value}deg)`;
            middleGear.style.transform = `rotate(${value}deg)`;
        });
    },[]);



    return (
        <div className={classes.ideasWhole}>
            <div className="container">
                <div className={classes.ideas}>
                    <div  data-aos="fade-right"
                          data-aos-duration="1500"
                          data-aos-once="true"
                          className={classes.ideasLeft}>
                            <div className={classes.ideasImgDiv}>
                                <img className={classes.ideasImg}
                                     src={`${config.baseUrl}storage/` +
                                         `${props?.homeInfo?.blocks?.[0]?.attributes?.image}`} alt=""/>
                            </div>
                        <div>
                            <div id={"greenHome2"}  className={classes.greenVintDiv}>
                                 <img src={BlueVint} alt=""/>
                            </div>
                            <div id={"orangeHome2"} className={classes.orangeVintDiv}>
                                <img src={RedVint} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ideasLeftMobile}>
                        <div className={classes.ideasImgDiv}>
                            <img className={classes.ideasImg}
                                 src={`${config.baseUrl}storage/` +`${props?.homeInfo?.blocks?.[0]?.attributes?.image}`}
                                 alt=""/>
                        </div>
                        <div>
                            <div id={"greenHome2"}  className={classes.greenVintDiv}>
                                <img src={BlueVint} alt=""/>
                            </div>
                            <div id={"orangeHome2"} className={classes.orangeVintDiv}>
                                <img src={RedVint} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div  data-aos="fade-left"
                          data-aos-duration="1500"
                          data-aos-once="true"
                          className={classes.ideasRight}>
                        <div className={classes.ideasTitle}>{props?.homeInfo?.blocks?.[0]?.attributes?.title}</div>
                        <div className={classes.ideasSubTitle}>
                            {props?.homeInfo?.blocks?.[0]?.attributes?.subtitle}
                        </div>
                        <div className={classes.ideasText}
                             dangerouslySetInnerHTML={{ __html: props?.homeInfo?.blocks?.[0]?.attributes?.description}}
                        />
                            <Button color="#92374D" OnClick={()=>navigate(`/services`)}>Services</Button>
                    </div>
                    <div className={classes.ideasRightMobile}>
                        <div className={classes.ideasTitle}>{props?.homeInfo?.blocks?.[0]?.attributes?.title}</div>
                        <div className={classes.ideasSubTitle}>
                            {props?.homeInfo?.blocks?.[0]?.attributes?.subtitle}
                        </div>
                        <div className={classes.ideasText}
                             dangerouslySetInnerHTML={{ __html: props?.homeInfo?.blocks?.[0]?.attributes?.description}}
                        />
                        <Button color="#92374D" OnClick={()=>navigate(`/services`)}>Services</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomeSecondComponent;



