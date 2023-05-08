import React from "react";
import config from "../../../config";
import classes from './HomeThirdComponent.module.css';


function HomeThirdComponent(props){


    const successStories =props?.homeInfo?.blocks?.slice(2,6);

const renderSuccessStories=successStories.map((item, index)=>
    <>
        <div data-aos="zoom-in"
             data-aos-duration="1300"
             data-aos-once="true"
             className={classes.cardSuccess} key={index}>
            <div className={classes.imgSuccessDiv}>
                <img className={classes.imgSuccess}
                     src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
            </div>
            <div className={classes.titleSuccess}>{item.attributes.title}</div>
            <div className={classes.descriptionSuccess}
                 dangerouslySetInnerHTML={{ __html:item.attributes.description}}/>
        </div>
        <div className={classes.cardSuccessMobile}>
            <div className={classes.imgSuccessDiv}>
                <img className={classes.imgSuccess}
                     src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
            </div>
            <div className={classes.titleSuccess}>{item.attributes.title}</div>
            <div className={classes.descriptionSuccess}
                 dangerouslySetInnerHTML={{ __html:item.attributes.description}}/>
        </div>
    </>
)

    return(
        <div className="container">
            <div className={classes.successTitle}>{props?.homeInfo?.blocks?.[1]?.attributes?.title}</div>
            <div className={classes.successSubTitle}>{props?.homeInfo?.blocks?.[1]?.attributes?.subtitle}</div>
            <div className={classes.successStoriesWhole}>
                {renderSuccessStories}
            </div>
        </div>
    )
}


export default HomeThirdComponent;