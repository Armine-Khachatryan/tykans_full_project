import React from "react";
import config from "../../../config";
import classes from './LetsTalk.module.css';





function LetsTalk(props) {



    return(
        <div className={classes.blueDiv}>
            <div className="container">
                <div className={classes.talkWhole}>
                    <div className={classes.talkLeft}>
                        <div className={classes.title}>{props?.contactInfo?.sections?.[0].attributes?.title}</div>
                        <div className={classes.contactTitle}>
                            {props?.contactInfo?.sections?.[1].attributes?.title}
                        </div>
                        <div className={classes.contactSubTitle}
                             dangerouslySetInnerHTML=
                                 {{__html:props?.contactInfo?.sections?.[1].attributes?.description}}>
                        </div>
                    </div>
                    <div className={classes.talkRight}>
                        <img className={classes.imgDiv} src={`${config.baseUrl}storage/` +
                            `${props?.contactInfo?.sections?.[0].attributes?.image}`} alt=""/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LetsTalk;