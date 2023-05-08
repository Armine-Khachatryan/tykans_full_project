import React from "react";
import {useNavigate} from "react-router-dom";
import classes from './LifeSecondPart.module.css';
import Button from "../../../UI/Button/Button";



function LifeSecondPart(props) {

    const navigate= useNavigate();
    const mediaInfo=props?.lifeATTykansInfo?.media;
    const mediaResult=mediaInfo?.filter(item =>item.collection_name==="multiply_images");

    return(
            <div className={classes.backgroundBlueLife}>
                <div className="container">
                    <div className="containerInside flexDirection">
                        <div className={classes.LeftPartLifeWorking}>
                            <div className={classes.titleLifeWorking}>
                                {props?.lifeATTykansInfo?.sections?.[1].attributes?.title}
                            </div>
                            <div className={classes.textLifeWorking}
                                 dangerouslySetInnerHTML=
                                     {{ __html: props?.lifeATTykansInfo?.sections?.[1].attributes?.description}}/>
                            <div className={classes.buttonsDivLife}>
                                <div className={classes.firstBtnLife}>
                                    <Button color='#92374D'
                                            OnClick={()=>navigate(`team-testimonials`)}>Team Testimonials</Button>
                                </div>
                                <Button color='#92374D' OnClick={()=>navigate(`/careers`)}>Explore Careers</Button>
                            </div>
                        </div>
                        <div className={classes.rightPartLifeWorking}>
                            <div className={classes.lifeImgDiv1}>
                                <img className={classes.lifeImg1}
                                     src={mediaResult?.[0]?.original_url}
                                     alt=""
                                         />
                            </div>
                            <div className={classes.imagesLife}>
                                <div className={classes.lifeImgDiv2}>
                                    <img className={classes.lifeImg1}
                                         src={mediaResult?.[1]?.original_url}
                                         alt=""/>
                                </div>
                                <div className={classes.lifeImgDiv3}>
                                    <img className={classes.lifeImg1}
                                         src={mediaResult?.[2]?.original_url}
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default LifeSecondPart;
