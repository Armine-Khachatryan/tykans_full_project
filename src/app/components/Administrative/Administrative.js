import React, {useState} from "react";
import moment from "moment";
import Button from "../../UI/Button/Button";
import classes from './Administrative.module.css';
import AdministartiveForm from "../AdministrativeForm/AdministartiveForm";





function Administrative(props) {


    const[showForm, setShowForm]=useState(false);



    return(
        <div className="container">
            <div className={classes.administrativeWhole}>
                <div className={classes.administrativeLeft}>
                    <div className={classes.administrativeTitle}>{props?.jobView?.category?.name}</div>
                    <div className={classes.administrativeInfo}>{props?.jobView?.address}
                        <span className={classes.spanAdmin}>/</span>
                        <span className={classes.spanAdmin}>{props?.jobView?.title}</span>
                        <span className={classes.spanAdmin}>/</span>
                        <span className={classes.spanAdmin}>{props?.jobView?.workflow}</span>
                        <span className={classes.spanAdmin}>/</span>
                        <div className={classes.administrativeInfo + classes.time}>
                            {moment(props?.jobView?.created_at).format('YYYY-MM-DD')}
                        <span className={classes.spanAdmin +  classes.time}>/</span>
                        <span className={classes.spanAdmin +  classes.time}>
                            {moment(props?.jobView?.deadline).format('YYYY-MM-DD')}</span></div>
                    </div>
                    <div className={classes.administrativeInfo}>{props?.jobView?.code}</div>
                </div>
                {!showForm &&
                <div>
                    <Button color='#92374D'
                            OnClick={()=>setShowForm(!showForm)}>Apply</Button>
                </div>}
            </div>
            {!showForm ?
                <>
                <div className={classes.adminTitle}>Role Overview</div>
                <div className={classes.adminText}>{props?.jobView?.role_overview}</div>
                <div className={classes.adminTitle}>What You Will Do</div>
                    <ul className={classes.ulAdministrative}>
                        {props?.jobView?.will_do && JSON.parse(props?.jobView?.will_do)?.map((item, index)=>(
                            <li key={index} className={classes.list}
                                dangerouslySetInnerHTML={{__html:item?.attributes?.title}}></li>
                        )) }
                    </ul>
                <div className={classes.adminTitle}>What You’ll Bring</div>
                <ul>
                    {props?.jobView?.bring && JSON.parse(props?.jobView?.bring)?.map((item, index)=>(
                        <li key={index} className={classes.list}
                             dangerouslySetInnerHTML={{__html:item?.attributes?.title}} ></li>
                    )) }
                </ul>
            </>: <AdministartiveForm id={props.id} administrativePageInfo={props.administrativePageInfo}/>}
                </div>
    )
}


export default Administrative;