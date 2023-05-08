// import React, {useEffect, useState} from "react";
// import Modal from 'react-modal';
// import CloseModal from '../../assets/images/CloseModal.png';
// import axios from "axios";
// import config from "../../config";
//
//
//
// function MigrateModal (props){
//
//
//
//
//     const customStyles = {
//         content: {
//             padding: '25px',
//             maxWidth: '860px',
//             width: '100%',
//             top: '55%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             background:'#FFFFFF',
//             borderRadius:'120px',
//         },
//         overlay: {zIndex: 1000}
//     };
//
//
//     const  [migrateModalInfo,setMigrateModal]=useState([]);
//     useEffect(() => {
//         getMigrateModalData();
//     },[]);
//
//
//
//     let getMigrateModalData = async () => {
//         try {
//             let response = await axios.get(`${config.baseUrl}api/modal?slug=migrate`);
//             setMigrateModal(response.data);
//
//         } catch (error) {
//             console.log(error.response, 'migrateModal error');
//         }
//     }
//
//
//
//     return (
//         <>
//             <Modal
//                 isOpen={props.migrateModalIsOpen}
//                 onRequestClose={props.closeMigrateModal}
//                 style={customStyles}
//                 ariaHideApp={false}
//             >
//                 <div className="modalInside">
//                     <div className="closingModal"  onClick={props.closeMigrateModal}>
//                         <img className="closeModalImg" src={CloseModal} alt=""/>
//                         <div className="closeWord">Close</div>
//                     </div>
//                     <div className="modalTitleGroup">
//                         <img className="modalImg" src={`${config.baseUrl}storage/` +`${migrateModalInfo?.image}`}
//                              alt=""/>
//                         <div className="modalTitles">
//                             <div className="modalTitle">{migrateModalInfo?.title}</div>
//                             <div className="modalSubTitle">{migrateModalInfo?.sub_title}</div>
//                         </div>
//                     </div>
//                     <div className="modalLi" dangerouslySetInnerHTML={{__html:migrateModalInfo?.description}}/>
//                     <div className="modalBtn">{migrateModalInfo?.button_info}</div>
//                 </div>
//             </Modal>
//         </>
//     )
// }
//
//
// export default MigrateModal;
