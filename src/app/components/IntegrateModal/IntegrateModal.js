// import React, {useEffect, useState} from "react";
// import Modal from 'react-modal';
// import CloseModal from '../../assets/images/CloseModal.png';
// import axios from "axios";
// import config from "../../config";
//
//
//
// function IntegrateModal (props){
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
//     const  [integrateModalInfo,setIntegrateModal]=useState([]);
//     useEffect(() => {
//         getIntegrateModalData();
//     },[]);
//
//
//
//     let getIntegrateModalData = async () => {
//         try {
//             let response = await axios.get(`${config.baseUrl}api/modal?slug=integrate`);
//             setIntegrateModal(response.data);
//
//         } catch (error) {
//             console.log(error.response, 'integrate error');
//         }
//     }
//
//
//
//     return (
//         <>
//             <Modal
//                 isOpen={props.integrateModalIsOpen}
//                 onRequestClose={props.closeIntegrateModal}
//                 style={customStyles}
//                 ariaHideApp={false}>
//                 <div className="modalInside">
//                     <div className="closingModal"  onClick={props.closeIntegrateModal}>
//                         <img src={CloseModal} alt=""/>
//                         <div className="closeWord">Close</div>
//                     </div>
//                     <div className="modalTitleGroup">
//                         <img className="modalImg" src={`${config.baseUrl}storage/` +`${integrateModalInfo?.image}`}
//                              alt=""/>
//                         <div className="modalTitles">
//                             <div className="modalTitle orange">{integrateModalInfo?.title}</div>
//                             <div className="modalSubTitle">{integrateModalInfo?.sub_title}</div>
//                         </div>
//                     </div>
//                     <div className="modalLi" dangerouslySetInnerHTML={{__html:integrateModalInfo?.description}}/>
//                     <div className="modalBtn orangeBtn">{integrateModalInfo?.button_info}</div>
//                 </div>
//             </Modal>
//         </>
//     )
// }
//
//
// export default IntegrateModal;
