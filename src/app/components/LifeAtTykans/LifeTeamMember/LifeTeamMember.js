import React from "react";
import SwiperLifeTeam from "../../LifeAtTykans/SwiperLifeTeam/SwiperLifeTeam";


function LifeTeamMember(props) {

    return (
        <>
            <SwiperLifeTeam lifeATTykansInfo={props.lifeATTykansInfo}/>
        </>
    )
}

export default LifeTeamMember;
