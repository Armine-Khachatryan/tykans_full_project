import React from "react";
import classes from './FAQThirdPart.module.css';



function FAQThirdPart(props){


    const questions= props?.faqInfo?.sections?.slice(2);

    const renderQuestions = questions?.map((item, index)=>
        <div className={classes.questionsDiv} key={index}>
            <div className={classes.questionDivWhole}>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="120" rx="60" fill="#484767"/>
                    <path d="M57.3835 70.4545H66.929L72.5824 77.7841L76.6165 82.5568L86.304 95H76.0767L69.4858
                    86.6477L66.6733 82.6705L57.3835 70.4545ZM87.696 60.9091C87.696 67.178 86.5218 72.5473 84.1733
                    77.017C81.8438 81.4678 78.6619 84.8769 74.6278 87.2443C70.6127 89.6117 66.0578 90.7955 60.9631
                    90.7955C55.8684 90.7955 51.304 89.6117 47.2699 87.2443C43.2547 84.858 40.0729 81.4394 37.7244
                     76.9886C35.3949 72.5189 34.2301 67.1591 34.2301 60.9091C34.2301 54.6402 35.3949 49.2803 37.7244
                     44.8295C40.0729 40.3598 43.2547 36.9413 47.2699 34.5739C51.304 32.2064 55.8684 31.0227 60.9631
                     31.0227C66.0578 31.0227 70.6127 32.2064 74.6278 34.5739C78.6619 36.9413 81.8438 40.3598 84.1733
                     44.8295C86.5218 49.2803 87.696 54.6402 87.696 60.9091ZM77.0994 60.9091C77.0994 56.4962 76.4081
                     52.7746 75.0256 49.7443C73.6619 46.6951 71.768 44.3939 69.3438 42.8409C66.9195 41.2689 64.1259
                     40.483 60.9631 40.483C57.8002 40.483 55.0066 41.2689 52.5824 42.8409C50.1581 44.3939 48.2547
                     46.6951 46.8722 49.7443C45.5085 52.7746 44.8267 56.4962 44.8267 60.9091C44.8267 65.322 45.5085
                     69.053 46.8722 72.1023C48.2547 75.1326 50.1581 77.4337 52.5824 79.0057C55.0066 80.5587 57.8002
                     81.3352 60.9631 81.3352C64.1259 81.3352 66.9195 80.5587 69.3438 79.0057C71.768 77.4337 73.6619
                     75.1326 75.0256 72.1023C76.4081 69.053 77.0994 65.322 77.0994 60.9091Z" fill="white"/>
                </svg>
                <div className={classes.titleQ}>
                    {item.attributes.title}
                </div>
            </div>
            <div className={classes.answer}
                 dangerouslySetInnerHTML={{ __html: item.attributes.description}}>
            </div>
        </div>
    )



    return(
        <div className="container">
            {renderQuestions}
        </div>
    )
}

export default FAQThirdPart;
