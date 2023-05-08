import React from "react";
import config from "../../../config";



function LifeFirstPart(props){
    return(
            <div className="part1BackImg center"
                 style={{ 'background-image':
                         `url(${config.baseUrl}storage/${props?.lifeATTykansInfo?.sections?.[0].attributes?.image})`}}>
                <div className="container">
                    <div className="titleServices orange">
                        {props?.lifeATTykansInfo?.sections?.[0].attributes?.title}</div>
                </div>
            </div>
    )
}


export default LifeFirstPart;

