import React from "react";
import config from "../../../config";


function TeamTestFirstPart (props){



return(
        <div className="part1BackImg" style={{ 'background-image':
                `url(${config.baseUrl}storage/${props?.teamInfo?.sections?.[0].attributes?.image})`}}>
            <div className="container">
                <div className="titleServices">{props?.teamInfo?.sections?.[0].attributes?.title}</div>
            </div>
        </div>
    )
}

export default TeamTestFirstPart;

