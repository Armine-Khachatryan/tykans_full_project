// import React, {useEffect, useState} from "react";
// import Modal from 'react-modal';
// import CloseModal from '../../assets/images/CloseModal.png';
// import axios from "axios";
// import config from "../../config";
//
//
//
// function AutomateModal (props){
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
//     const  [automateModalInfo,setAutomateModal]=useState([]);
//     useEffect(() => {
//         getAutomateModalData();
//     },[]);
//
//
//
//     let getAutomateModalData = async () => {
//         try {
//             let response = await axios.get(`${config.baseUrl}api/modal?slug=automate`);
//             console.log(response.data, "automate response");
//             setAutomateModal(response.data);
//
//         } catch (error) {
//             console.log(error);
//             console.log(error.response, 'automate error');
//         }
//     }
//
//
//     return (
//         <>
//             <Modal
//                 isOpen={props.automateModalIsOpen}
//                 onRequestClose={props.closeAutomateModal}
//                 style={customStyles}
//                 ariaHideApp={false}
//             >
//                 <div className="modalInside">
//                     <div className="closingModal"  onClick={props.closeAutomateModal}>
//                         <img src={CloseModal} alt=""/>
//                         <div className="closeWord">Close</div>
//                     </div>
//                     <div className="modalTitleGroup">
//                         <img className="modalImg" src={`${config.baseUrl}storage/` +`${automateModalInfo?.image}`}
//                              alt=""/>
//                         <div className="modalTitles">
//                             <div className="modalTitle green">{automateModalInfo?.title}</div>
//                             <div className="modalSubTitle">{automateModalInfo?.sub_title}</div>
//                         </div>
//                     </div>
//                     <div className="modalLi" dangerouslySetInnerHTML={{__html:automateModalInfo?.description}}/>
//                     <div className="modalBtn greenBtn">{automateModalInfo?.button_info}</div>
//                 </div>
//             </Modal>
//         </>
//     )
// }
//
//
// export default AutomateModal;
