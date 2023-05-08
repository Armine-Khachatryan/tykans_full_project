import React, {useEffect} from "react";
import classes from './NumbersData.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../../../UI/Button/Button";



function NumbersData(props) {

    const routePath = useLocation();
    const navigate =useNavigate();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routePath]);



    const numbersRender=props?.aboutUsInfo2?.blocks?.map((item, index)=>(
            <div className={classes.numbersDiv} key={index}>
                <div className={classes.number}>{item.attributes.title}</div>
                <div className={classes.text}>{item.attributes.subtitle}</div>
            </div>
    ))

    return(

        <div className="container">
            <div className={classes.numbersWhole}>
                <div className={classes.titleNumbers}>{props?.aboutUsInfo?.sections?.[4]?.attributes?.title}</div>
                <div className={classes.subTitleNumbers}
                     dangerouslySetInnerHTML={{ __html: props?.aboutUsInfo?.sections?.[4]?.attributes?.description}}
               />
                <div className={classes.numbersBlock}>
                    {numbersRender}
                </div>
                <div className={classes.btnsDivNumbers}>
                    <div className={classes.firstButton}>
                        <Button color="#92374D" OnClick={props.moveToTeamTestimonialsPage}>Team Testimonials</Button>
                    </div>
                    <Button color="#92374D" OnClick={()=>navigate(`/careers`)}>Explore Careers</Button>
                </div>
            </div>
        </div>
        )
}

export default NumbersData;



