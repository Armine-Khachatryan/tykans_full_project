import React, {useEffect} from "react";
import Phone from '../../../assets/images/contactUs/Phone.png';
import Message from '../../../assets/images/contactUs/Message.png';
import Twitter from '../../../assets/images/contactUs/Twitter.png';
import Youtube from '../../../assets/images/contactUs/Youtube.png';
import RedIcon from '../../../assets/images/contactUs/RedIcon.png';
import Facebook from '../../../assets/images/contactUs/Facebook.png';
import LinkedIn from '../../../assets/images/contactUs/LinkedIn.png';
import Instagram from '../../../assets/images/contactUs/Instagram.png';
import YellowIcon from '../../../assets/images/contactUs/YellowIcon.png';
import classes from './ContactUsBelowPart.module.css';





function ContactUsBelowPart(props) {

    useEffect(()=>{
        const leftGear = document.getElementById("yellowContact"),
            rightGear = document.getElementById("redContact")

        window.addEventListener("scroll", function() {
            let value = window.scrollY * 0.3;
            leftGear.style.transform = `rotate(${value}deg)`;
            rightGear.style.transform = `rotate(${value}deg)`;
        });
    },[])


    return (
        <>
            <div className="container">
                <div className={classes.wholeBelowContact}>
                    <div className={classes.leftPart}>
                        <div className={classes.titleFind}>Find us online & URL</div>
                        <div className={classes.addressContactSocial}>
                            <div className={classes.detailsDiv}>
                                <div className={classes.detailsTitle}>Address</div>
                                <div className={classes.detailsAddress}>
                                    {props?.contactInfo?.footer_block?.[0]?.attributes?.address}
                                </div>
                            </div>
                            <div className={classes.detailsDiv}>
                                <div className={classes.detailsTitle}>Contact</div>
                                <div className={classes.detailsContact}><img src={Message}/>
                                    {props?.contactInfo?.footer_block?.[0]?.attributes?.email}
                                </div>
                                <div className={classes.detailsContact}><img src={Phone}/>
                                    {props?.contactInfo?.footer_block?.[0]?.attributes?.phone}
                                </div>
                            </div>
                            <div className={classes.detailsDiv}>
                                <div className={classes.detailsTitle}>Social</div>
                                <div className={classes.iconsWhole}>
                                    <a href ={props?.contactInfo?.footer_block?.[0]?.attributes?.linkedin}
                                       target="_blank" rel="noreferrer noopener">
                                        <img className={classes.iconDiv} src={LinkedIn}
                                             alt="linkedIn"/>
                                    </a>
                                    <a
                                        href ={props?.contactInfo?.footer_block?.[0]?.attributes?.instagram}
                                       target="_blank" rel="noreferrer noopener">
                                        <img className={classes.iconDiv} src={Instagram}
                                             alt="instagram"/>
                                    </a>
                                    <a
                                        href ={props?.contactInfo?.footer_block?.[0]?.attributes?.facebook}
                                       target="_blank" rel="noreferrer noopener">
                                        <img className={classes.iconDiv} src={Facebook}
                                             alt="facebook"/>
                                    </a>
                                    <a
                                        href ={props?.contactInfo?.footer_block?.[0]?.attributes?.twitter}
                                       target="_blank" rel="noreferrer noopener">
                                        <img className={classes.iconDiv} src={Twitter}
                                             alt="twitter"/>
                                    </a>
                                    <a
                                        href ={props?.contactInfo?.footer_block?.[0]?.attributes?.youtube}
                                       target="_blank" rel="noreferrer noopener">
                                        <img className={classes.iconDiv} src={Youtube}
                                             alt="youtube"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id={"redContact"} className={classes.redIconDiv}>
                            <img src={RedIcon} alt=""/>
                        </div>
                        <div id={"yellowContact"} className={classes.yellowIconDiv}>
                            <img src={YellowIcon} alt=""/>
                        </div>
                    </div>
                    <div className={classes.rightPart}>
                        <iframe className={classes.frame} width="640" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=3412%2025%20Street%20NE%20Calgary,
                                %20Alberta,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                    </div>
                </div>
            </div>
        </>

    )
}


export default ContactUsBelowPart;