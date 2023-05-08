import React, {useEffect, useState} from "react";
import FooterLogo from '../../assets/images/footer/FooterLogo.png';
import GreenVint from '../../assets/images/home/YellowNew.png';
import YellowVint from '../../assets/images/YellowVint.png';
import OrangeVint from '../../assets/images/contactUs/RedIcon.png';
import Twitter from '../../assets/images/footer/Twitter.png';
import Facebook from '../../assets/images/footer/Facebook.png';
import Instagram from '../../assets/images/footer/Instagram.png';
import LinkedIn from '../../assets/images/footer/LinkedIn.png';
import Youtube from '../../assets/images/footer/Audio.png';
import Mail from '../../assets/images/footer/Mail.png';
import Phone from '../../assets/images/footer/Phone.png';
import Map from '../../assets/images/footer/Map.png';
import classes from './Footer.module.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import config from "../../config";





function Footer() {


    const [footerInfo,setFooterInfo]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        const leftGear = document.getElementById("greenFooter"),
            // rightGear = document.getElementById("yellowFooter"),
            middleGear=document.getElementById("orangeFooter")

        window.addEventListener("scroll", function() {
            let value = window.scrollY * 0.3;
            leftGear.style.transform = `rotate(${value}deg)`;
            // rightGear.style.transform = `rotate(${value}deg)`;
            middleGear.style.transform = `rotate(${value}deg)`;
        });
    },[])

    useEffect(() => {
        getFooterData();
    },[]);


    let getFooterData = async () => {
        try {
            let response = await axios.get(`${config.baseUrl}api/pages?page=footer`);
            setFooterInfo(response.data);

        } catch (error) {
            console.log(error.response, 'footerInfo error');
        }
    }



    return(
        <div className={classes.footerWhole}>
            <div className="container">
                    <div className={classes.footerMobileWhole}>
                        <div className={classes.footer1Mobile}>
                            <img className={classes.footerLogoMobile} src={FooterLogo} alt=""/>
                        </div>
                        <div className={classes.footerMobile2}>
                            <div className={classes.footerTitleMobile} onClick={()=>navigate(`/contact-us`)}>
                                Contact Us
                            </div>
                            <div className={classes.footerContactsDivMobile}>
                                <img src={Mail}  alt=""/>
                                <div className={classes.footerContactMobile}>
                                    {footerInfo?.footer_block?.[0]?.attributes?.email}
                                </div>
                            </div>
                            <div className={classes.footerContactsDivMobile}>
                                <img src={Phone}   alt=""/>
                                <div className={classes.footerContactMobile}>
                                    {footerInfo?.footer_block?.[0]?.attributes?.phone}
                                </div>
                            </div>
                            <div className={classes.footerContactsDivMobile}>
                                <img src={Map}   alt=""/>
                                <div className={classes.footerContactMobile}>
                                    {footerInfo?.footer_block?.[0]?.attributes?.address}
                                </div>
                            </div>
                        </div>
                        <div className={classes.footerMobile3}>
                            <div className={classes.footerTitleMobile} onClick={()=>navigate(`/services`)}>
                                Services
                            </div>
                            <div className={classes.footerContactMobile} onClick={()=>navigate(`/life-at-tykans`)}>
                                Life at Tykans
                            </div>
                            <div className={classes.footerContactMobile} onClick={()=>navigate(`/about-us`)}>
                                About Us
                            </div>
                            <div className={classes.footerContactMobile} onClick={()=>navigate(`/careers/faq`)}>
                                FAQs
                            </div>
                            <div className={classes.footerContactMobile} onClick={()=>navigate(`/careers`)}>
                                Careers
                            </div>
                            <div className={classes.footerContactMobile}
                                 onClick={()=>navigate(`/life-at-tykans/team-testimonials`)}>Team Testimonials</div>
                        </div>
                        <div className={classes.footerIconsMobile}>
                            <a  className={classes.footerIcon}
                                href={footerInfo?.footer_block?.[0]?.attributes?.twitter}
                                target="_blank" rel="noreferrer noopener">
                                <img  src={Twitter}
                                      alt="twitter"/>
                            </a>
                            <a className={classes.footerIcon}
                               href={footerInfo?.footer_block?.[0]?.attributes?.facebook}
                               target="_blank" rel="noreferrer noopener">
                                <img src={Facebook}
                                     alt="facebook"/>
                            </a>
                            <a className={classes.footerIcon}
                               href={footerInfo?.footer_block?.[0]?.attributes?.instagram}
                               target="_blank" rel="noreferrer noopener">
                                <img src={Instagram}
                                     alt="instagram"/>
                            </a>
                            <a className={classes.footerIcon}
                               href={footerInfo?.footer_block?.[0]?.attributes?.linkedin}
                               target="_blank" rel="noreferrer noopener">
                                <img src={LinkedIn}
                                     alt="linkedIn"/>
                            </a>
                            <a className={classes.footerIcon}
                               href={footerInfo?.footer_block?.[0]?.attributes?.youtube}
                               target="_blank" rel="noreferrer noopener">
                                <img src={Youtube}
                                     alt="youtube"/>
                            </a>
                        </div>
                        <div className={classes.footerBelowMobile}>
                            <div className={classes.footerBelow1Mobile}>© Tykans Group Inc. 2022</div>
                            <div className={classes.footerBelow2Mobile} onClick={()=>navigate('/privacy-policy')}>
                                Privacy Policy
                            </div>
                            <div className={classes.footerBelow3Mobile} onClick={()=>navigate('/terms')}>
                                Terms of Use
                            </div>
                        </div>
                    </div>
                <div className={classes.footer}>
                    <div className={classes.footerUp}>
                        <div className={classes.footer1}>
                            <img className={classes.footerLogo} src={FooterLogo}/>
                            <iframe width="412" height="200" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=3412%2025%20Street%20NE%20Calgary,%20Alberta,%20Canada&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            <div className={classes.footerIcons}>
                                <a  className={classes.footerIcon}
                                    href={footerInfo?.footer_block?.[0]?.attributes?.twitter}
                                    target="_blank" rel="noreferrer noopener">
                                    <img  src={Twitter}
                                          alt="twitter"/>
                                </a>
                                <a className={classes.footerIcon}
                                   href={footerInfo?.footer_block?.[0]?.attributes?.facebook}
                                   target="_blank" rel="noreferrer noopener">
                                    <img src={Facebook}
                                         alt="facebook"/>
                                </a>
                                <a className={classes.footerIcon}
                                   href={footerInfo?.footer_block?.[0]?.attributes?.instagram}
                                   target="_blank" rel="noreferrer noopener">
                                    <img src={Instagram}
                                         alt="instagram"/>
                                </a>
                                <a className={classes.footerIcon}
                                   href={footerInfo?.footer_block?.[0]?.attributes?.linkedin}
                                   target="_blank" rel="noreferrer noopener">
                                    <img src={LinkedIn}
                                         alt="linkedIn"/>
                                </a>
                                <a className={classes.footerIcon}
                                   href={footerInfo?.footer_block?.[0]?.attributes?.youtube}
                                   target="_blank" rel="noreferrer noopener">
                                    <img src={Youtube}
                                         alt="youtube"/>
                                </a>
                            </div>
                        </div>
                        <div className={classes.footerWebPart}>
                            <div className={classes.footerTitle} onClick={()=>navigate(`/contact-us`)}>
                                Contact Us</div>
                            <div className={classes.footerContactsDiv}>
                                <img src={Mail}/>
                                <div className={classes.footerContact}>
                                    {footerInfo?.footer_block?.[0]?.attributes?.email}</div>
                            </div>
                            <div className={classes.footerContactsDiv}>
                                <img src={Phone}/>
                                <div className={classes.footerContact}>
                                    {footerInfo?.footer_block?.[0]?.attributes?.phone}</div>
                            </div>
                            <div className={classes.footerContactsDiv}>
                                <img src={Map}/>
                                <div className={classes.footerContact}>
                                    {footerInfo?.footer_block?.[0]?.attributes?.address}</div>
                            </div>
                        </div>
                        <div className={classes.footer2}>
                            <div className={classes.footerInfo} onClick={()=>navigate(`/services`)}>
                                Services</div>
                            <div className={classes.footerInfo} onClick={()=>navigate(`/life-at-tykans`)}>
                                Life at Tykans</div>
                            <div className={classes.footerInfo} onClick={()=>navigate(`/about-us`)}>About Us</div>
                            <div className={classes.footerInfo} onClick={()=>navigate(`/careers/faq`)}>FAQs</div>
                            <div className={classes.footerInfo} onClick={()=>navigate(`/careers`)}>Careers</div>
                            <div className={classes.footerInfo}
                                 onClick={()=>navigate(`/life-at-tykans/team-testimonials`)}>Team Testimonials</div>
                        </div>
                        <div className={classes.footerImg}>
                            {/*<div id={"yellowFooter"} className={classes.yellowVint} >*/}
                            {/*    <img src={YellowVint}/>*/}
                            {/*</div>*/}
                            <div id={"greenFooter"} className={classes.greenVint}>
                                <img src={GreenVint}/>
                            </div>
                            <div id={"orangeFooter"} className={classes.orangeVint}>
                                <img src={OrangeVint}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footerBelowPart}>
                        <div className={classes.footerBelowLeft}>
                            <div className={classes.footerBelowText}
                                 onClick={()=>navigate('/privacy-policy')}>Privacy Policy</div>
                            <div className={classes.footerBelowText} onClick={()=>navigate('/terms')}>
                                Terms of Use</div>
                        </div>
                        <div className={classes.rightOne}>©Tykans Group Inc. 2022</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;