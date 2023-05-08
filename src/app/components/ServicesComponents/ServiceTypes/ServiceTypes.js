import React, {useState} from "react";
import config from "../../../config";
import MigrateModal from "../../MigrateModal/MigrateModal";
import BlueBook from "../../../assets/images/bookIcons/BlueBook.png";
import IntegrateModal from "../../IntegrateModal/IntegrateModal";
import CreateModal from "../../CreateModal/CreateModal";
import AutomateModal from '../../AutomateModal/AutomateModal';
import 'swiper/css';
import classes from './ServiceTypes.module.css';
import OperateModal from "../../OperateModal/OperateModal";
import 'swiper/css/keyboard';
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperMigrate from "../SwiperMigrate/SwiperMigrate";
import Button from "../../../UI/Button/Button";
import {useNavigate} from "react-router-dom";






function ServiceTypes(props) {

    const navigate=useNavigate();
    // const [migrateModalIsOpen, setMigrateModalIsOpen] = useState(false);
    // const [integrateModalIsOpen, setIntegrateModalIsOpen]=useState(false);
    // const [createModalIsOpen, setCreateModalIsOpen]=useState(false);
    // const [automateModalIsOpen, setAutomateModalIsOpen] = useState(false);
    // const [operateModalIsOpen, setOperateModalIsOpen] = useState(false);
    //
    //
    // function openMigrateModal() {
    //     setMigrateModalIsOpen(true);
    // }
    //
    // function closeMigrateModal(){
    //     setMigrateModalIsOpen(false);
    // }
    //
    // function openIntegrateModal() {
    //     setIntegrateModalIsOpen(true);
    // }
    //
    // function closeIntegrateModal(){
    //     setIntegrateModalIsOpen(false);
    // }
    //
    // function openCreateModal() {
    //     setCreateModalIsOpen(true);
    // }
    //
    // function closeCreateModal(){
    //     setCreateModalIsOpen(false);
    // }
    //
    // function openAutomateModal() {
    //     setAutomateModalIsOpen(true);
    // }
    //
    // function closeAutomateModal(){
    //     setAutomateModalIsOpen(false);
    // }
    //
    // function openOperateModal() {
    //     setOperateModalIsOpen(true);
    // }
    //
    // function closeOperateModal(){
    //     setOperateModalIsOpen(false);
    // }


    // const switchForModal = (parameter) => {
    //     switch (parameter) {
    //         case "migrate":
    //             return openMigrateModal();
    //         case "integrate":
    //             return openIntegrateModal();
    //         case "create":
    //             return openCreateModal();
    //         case "automate":
    //             return openAutomateModal();
    //         default:
    //             return openOperateModal();
    //     }
    // };

    const services = props?.servicesInfo?.blocks?.slice(0,5);


    const renderServices=services?.map((item, index)=>(
            <div className={classes.serviceTypesWhole} key={index} id={item.attributes.title}>
                    <div className={classes.leftPartServiceTypes}>
                        <img className="circleBig"
                             src={`${config.baseUrl}storage/` +`${item.attributes.image}`} alt=""/>
                    </div>
                    <div className={classes.rightPartServiceTypes}>
                        <div className={classes.titleServiceTypes}>{item.attributes.title}</div>
                        <div className="subTitle">{item.attributes.subtitle}</div>
                        <div className="textStyle" dangerouslySetInnerHTML={{ __html: item.attributes.description }}/>
                        <Button color="#26225A" OnClick={()=>navigate(`/contact-us`)}>Let’s talk migration solutions
                        </Button>
                        {/*<div className={classes.readMore} onClick={()=>switchForModal(item.attributes.slug)}>*/}
                        {/*    <img className="blueBookImg" src={BlueBook} alt=""/>Read More</div>*/}
                    </div>
            </div>
    ))


    return(
        <>
            <div className={classes.services}>
                <div className="container" >
                    <div className={classes.renderServices}>
                            {renderServices}
                    </div>
                    <div className={classes.renderServicesMobile}>
                        <SwiperMigrate services={services}
                                       // switchForModal={switchForModal}
                        />
                    </div>
                </div>
            </div>
           {/* <MigrateModal migrateModalIsOpen={migrateModalIsOpen} closeMigrateModal={closeMigrateModal}/>*/}
           {/*<IntegrateModal integrateModalIsOpen={integrateModalIsOpen} closeIntegrateModal={closeIntegrateModal}/>*/}
           {/* <CreateModal createModalIsOpen={createModalIsOpen} closeCreateModal={closeCreateModal}/>*/}
           {/* <AutomateModal automateModalIsOpen={automateModalIsOpen} closeAutomateModal={closeAutomateModal}/>*/}
           {/* <OperateModal operateModalIsOpen={operateModalIsOpen} closeOperateModal={closeOperateModal}/>*/}
        </>
    )
}


export default ServiceTypes;

