import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../../UI/Button/Button";
import RedVint from '../../../assets/images/home/RedNew.png';
import BlueVint from '../../../assets/images/home/BlueNew.png';
import OrangeBigVint from '../../../assets/images/home/OrangeNew.png';
import classes from './HomeFifthPart.module.css';



function HomeFifthPart (props){

    const navigate=useNavigate();

    useEffect(()=>{
        const leftGear = document.getElementById("redHome4"),
            rightGear = document.getElementById("orangeHome4"),
            middleGear=document.getElementById("blueHome4")
        window.addEventListener("scroll", function() {
            let value = window.scrollY * 0.3;
            leftGear.style.transform = `rotate(${value}deg)`;
            rightGear.style.transform = `rotate(${value}deg)`;
            middleGear.style.transform = `rotate(${value}deg)`;
        });
    },[]);

    const homeImages2 = props?.homeInfo?.media;
    const homeImages2Result=homeImages2?.filter(item =>item.collection_name==="multiply_images2");



    return(
        <div className={classes.fifthPartWhole}>
            <div className="container">
                <div data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-once="true"
                    className={classes.fifthPartLeft}>
                    <div id={"redHome4"} className={classes.redCog}>
                        <img  src={RedVint} alt=""/>
                    </div>
                    <div className={classes.fifthPartImg1Div}>
                        <img className={classes.fifthPartImg}
                        src={homeImages2Result?.[0]?.original_url} alt=""/>
                    </div>
                    <div className={classes.fifthPartImg2Div}>
                        <img className={classes.fifthPartImg}
                             src={homeImages2Result?.[1]?.original_url} alt=""/>
                    </div>
                    <div className={classes.fifthPartImg3Div}>
                        <img className={classes.fifthPartImg}
                             src={homeImages2Result?.[2]?.original_url} alt=""/>
                    </div>
                    <div id={"orangeHome4"} className={classes.orangeCog}>
                        <img  src={OrangeBigVint} alt=""/>
                    </div>
                    <div className={classes.fifthPartImg4Div}>
                        <img className={classes.fifthPartImg}
                             src={homeImages2Result?.[3]?.original_url} alt=""/>
                    </div>
                    <div id={"blueHome4"} className={classes.blueCog}>
                        <img src={BlueVint} alt=""/>
                    </div>
                </div>
                <div className={classes.fifthPartRight}
                     data-aos="fade-up"
                     data-aos-duration="1500"
                     data-aos-once="true">
                    <div className={classes.fifthPartTitle}>{props?.homeInfo?.blocks?.[7]?.attributes?.title}</div>
                    <div className={classes.fifthPartSubTitle}>
                        {props?.homeInfo?.blocks?.[7]?.attributes?.subtitle}
                    </div>
                    <div className={classes.fifthPartText}
                         dangerouslySetInnerHTML={{ __html:props?.homeInfo?.blocks?.[7]?.attributes?.description}}>
                    </div>
                    <div className={classes.btnsFifthPart}>
                        <div className={classes.leftBtn}>
                            <Button color="#16145F" OnClick={()=> navigate(`/careers`)}>Explore Careers</Button>
                        </div>
                        <Button color="#16145F" OnClick={()=> navigate(`/life-at-tykans/team-testimonials`)}>
                            Team Testimonials</Button>
                    </div>
                </div>
                <div className={classes.fifthPartRightMobile}>
                    <div className={classes.fifthPartTitle}>{props?.homeInfo?.blocks?.[7]?.attributes?.title}</div>
                    <div className={classes.fifthPartSubTitle}>
                        {props?.homeInfo?.blocks?.[7]?.attributes?.subtitle}
                    </div>
                    <div className={classes.fifthPartText}
                         dangerouslySetInnerHTML={{ __html:props?.homeInfo?.blocks?.[7]?.attributes?.description}}>
                    </div>
                    <div className={classes.btnsFifthPart}>
                        <div className={classes.leftBtn}>
                            <Button color="#16145F" OnClick={()=>navigate(`/careers`)}>Explore Careers</Button>
                        </div>
                        <Button color="#16145F" OnClick={()=>navigate(`/life-at-tykans/team-testimonials`)}>
                            Team Testimonials
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFifthPart;






