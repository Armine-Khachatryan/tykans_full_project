import React from "react";
import config from "../../../config";
import classes from './LifeThirdPart.module.css';

function LifeThirdPart(props){

    return(
        <>
            <div className={classes.backgroundLifeThirdPart}
                 style={{ 'background-image':
                         `url(${config.baseUrl}storage/${props?.lifeATTykansInfo?.sections?.[2].attributes?.image})`}}>
                <div className="container">
                    <div className={classes.containerInside}>
                    <div className={classes.titleLifeThird}>
                        {props?.lifeATTykansInfo?.sections?.[2].attributes?.title}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LifeThirdPart;
