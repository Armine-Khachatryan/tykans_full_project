// import React, {useEffect, useState} from "react";
// import Modal from 'react-modal';
// import CloseModal from '../../assets/images/CloseModal.png';
// import axios from "axios";
// import config from "../../config";
//
//
//
// function CreateModal (props){
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
//     const  [createModalInfo,setCreateModal]=useState([]);
//     useEffect(() => {
//         getCreateModalData();
//     },[]);
//
//
//
//     let getCreateModalData = async () => {
//         try {
//             let response = await axios.get(`${config.baseUrl}api/modal?slug=create`);
//             setCreateModal(response.data);
//
//         } catch (error) {
//             console.log(error.response, 'create error');
//         }
//     }
//
//
//     return (
//         <>
//             <Modal
//                 isOpen={props.createModalIsOpen}
//                 onRequestClose={props.closeCreateModal}
//                 style={customStyles}
//                 ariaHideApp={false}
//             >
//                 <div className="modalInside">
//                     <div className="closingModal"  onClick={props.closeCreateModal}>
//                         <img src={CloseModal} alt=""/>
//                         <div className="closeWord">Close</div>
//                     </div>
//                     <div className="modalTitleGroup">
//                         <img className="modalImg" src={`${config.baseUrl}storage/` +`${createModalInfo?.image}`}
//                              alt=""/>
//                         <div className="modalTitles">
//                             <div className="modalTitle yellow">{createModalInfo?.title}</div>
//                             <div className="modalSubTitle">{createModalInfo?.sub_title}</div>
//                         </div>
//                     </div>
//                     <div className="modalLi" dangerouslySetInnerHTML={{__html:createModalInfo?.description}}/>
//                     <div className="modalBtn yellowBtn">{createModalInfo?.button_info}</div>
//                 </div>
//             </Modal>
//         </>
//     )
// }
//
//
// export default CreateModal;
