import React from "react";
import SwiperLifeCircles from '../../LifeAtTykans/SwiperLifeCircles/SwiperLifeCircles';
import config from "../../../config";
import classes from './LifeCircles.module.css';


function LifeCircles(props) {

    const renderLifeCircles=props?.lifeATTykansInfo?.blocks?.map((item, index)=>(
        <div className={classes.celebrateWhole} key={index}>
            <div className={classes.leftPartCelebrate}>
                <img className="circleBig" src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
            </div>
            <div className={classes.rightPartCelebrate}>
                <div className={classes.titleCelebrate}>{item.attributes.title}</div>
                <div className="subTitle">{item.attributes.subtitle}</div>
                <div className="textStyle" dangerouslySetInnerHTML={{ __html: item.attributes.description }}/>
            </div>
        </div>
    ))


    return(
        <div className={classes.circlesBlock}>
            <div className="container">
                <div className={classes.renderLifeCircles}>
                    {renderLifeCircles}
                </div>
                <div className={classes.renderLifeCirclesMobile}>
                    <SwiperLifeCircles circles={props?.lifeATTykansInfo?.blocks}/>
                </div>
            </div>
        </div>
    )
}


export default LifeCircles;