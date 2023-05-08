import React from "react";
import config from "../../../config";
import {useNavigate} from "react-router-dom";
import classes from './LifeFourthPart.module.css';



function LifeFourthPart(props){

    const navigate=useNavigate();

    return(
        <div className={classes.teamTestBackImg}>
            <div className={classes.photoTeamTest}
                 style={{ 'background-image':
                         `url(${config.baseUrl}storage/${props?.lifeATTykansInfo?.sections?.[3].attributes?.image})`}}>
                <div className={classes.titleTeamTest}  onClick={()=>{navigate("team-testimonials")}}>
                    {props?.lifeATTykansInfo?.sections?.[3].attributes?.title}</div>
            </div>
        </div>
    )
}


export default LifeFourthPart;