import React from "react";
import config from "../../../config";



function FAQFirstPage(props){

    return(
        <div className="part1BackImg"
             style={{ 'background-image':
                     `url(${config.baseUrl}storage/${props?.faqInfo?.sections?.[0].attributes?.image})`}}>
            <div className="container">
                <div className="titleServices yellowOneTitle">
                    {props?.faqInfo?.sections?.[0].attributes?.title}
                </div>
            </div>
        </div>
    )
}


export default FAQFirstPage;
