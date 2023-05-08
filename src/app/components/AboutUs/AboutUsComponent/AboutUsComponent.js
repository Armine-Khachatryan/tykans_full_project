import React from "react";
import config from "../../../config";


function AboutUsComponent(props) {



    return(
        <div className="part1BackImg"
             style={{ 'background-image':
                     `url(${config.baseUrl}storage/${props?.aboutUsInfo?.sections?.[0].attributes?.image})`}}>
            <div className="container">
                <div className="titleServices">{props?.aboutUsInfo?.sections?.[0].attributes?.title}</div>
            </div>
        </div>
    )
}

export default AboutUsComponent;
