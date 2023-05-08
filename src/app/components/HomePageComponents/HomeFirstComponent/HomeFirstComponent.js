import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../../UI/Button/Button";
import classes from './HomeFirstComponent.module.css';
import RedVint from '../../../assets/images/contactUs/RedIcon.png';
import YellowVint from '../../../assets/images/contactUs/YellowIcon.png';






function HomeFirstComponent(props){
    useEffect(()=>{
        const leftGear = document.getElementById("yellowHome1"),
        rightGear = document.getElementById("redHome1")
        window.addEventListener("scroll", function() {
            let value = window.scrollY * 0.3;
            leftGear.style.transform = `rotate(${value}deg)`;
            rightGear.style.transform = `rotate(${value}deg)`;
        });
    },[]);


    const navigate=useNavigate();

    return(
        <div className="container">
            <div className={classes.helpWhole}>
                <div  data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-once="true"
                     className={classes.fadeHomeFirst}>
                    <div className={classes.helpLeft}>
                        <div className={classes.helpTitle}>{props?.homeInfo?.sections?.[1]?.attributes?.title}</div>
                            <div className={classes.helpText}
                                 dangerouslySetInnerHTML=
                                     {{ __html: props?.homeInfo?.sections?.[1]?.attributes?.description}}/>
                        <div
                            className={classes.helpBtn}>
                            <Button color="#16145F" OnClick={()=>navigate(`/contact-us`)}>How can we help?</Button>
                        </div>
                    </div>
                </div>
                <div  className={classes.fadeMobileHomeFirst}>
                    <div className={classes.helpLeft}>
                        <div className={classes.helpTitle}>{props?.homeInfo?.sections?.[1]?.attributes?.title}</div>
                        <div className={classes.helpText}
                             dangerouslySetInnerHTML=
                                 {{ __html: props?.homeInfo?.sections?.[1]?.attributes?.description }}/>
                        <div
                            className={classes.helpBtn}>
                            <Button color="#16145F" OnClick={()=>navigate(`/contact-us`)}>How can we help?</Button>
                        </div>
                    </div>
                </div>
                <div className={classes.helpRight}>
                    <div id={"yellowHome1"} className={classes.yellowDiv}><img src={YellowVint} alt=""/></div>
                    <div id={"redHome1"} className={classes.redDiv}><img src={RedVint} alt=""/></div>
                </div>
            </div>
        </div>
    )
}


export default HomeFirstComponent;

