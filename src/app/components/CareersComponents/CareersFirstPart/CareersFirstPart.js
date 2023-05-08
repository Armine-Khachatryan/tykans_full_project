import React from "react";
import config from "../../../config";




function CareersFirstPage (props){

    return(
        <div className="part1BackImg"
             style={{ 'background-image':
                     `url(${config.baseUrl}storage/${props?.careersInfo?.sections?.[0]?.attributes?.image})`}}>
            <div className="container">
                <div className="titleServices redTitle">{props?.careersInfo?.sections?.[0]?.attributes?.title}</div>
            </div>
        </div>
    )
}


export default CareersFirstPage;
