// import React, {useEffect, useState} from "react";
// import Modal from 'react-modal';
// import CloseModal from '../../assets/images/CloseModal.png';
// import axios from "axios";
// import config from "../../config";
//
//
//
// function OperateModal (props){
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
//     const  [operateModalInfo,setOperateModal]=useState([]);
//     useEffect(() => {
//         getOperateModalData();
//     },[]);
//
//
//
//     let getOperateModalData = async () => {
//         try {
//             let response = await axios.get(`${config.baseUrl}api/modal?slug=operate`);
//             setOperateModal(response.data);
//
//         } catch (error) {
//             console.log(error);
//             console.log(error.response, 'operate error');
//         }
//     }
//
//
//     return (
//         <>
//             <Modal
//                 isOpen={props.operateModalIsOpen}
//                 onRequestClose={props.closeOperateModal}
//                 style={customStyles}
//                 ariaHideApp={false}
//             >
//                 <div className="modalInside">
//                     <div className="closingModal"  onClick={props.closeOperateModal}>
//                         <img src={CloseModal} alt=""/>
//                         <div className="closeWord">Close</div>
//                     </div>
//                     <div className="modalTitleGroup">
//                         <img className="modalImg" src={`${config.baseUrl}storage/` +`${operateModalInfo?.image}`}
//                              alt=""/>
//                         <div className="modalTitles">
//                             <div className="modalTitle blue">{operateModalInfo?.title}</div>
//                             <div className="modalSubTitle">{operateModalInfo?.sub_title}</div>
//                         </div>
//                     </div>
//                     <div className="modalLi" dangerouslySetInnerHTML={{__html:operateModalInfo?.description}}/>
//                     <div className="modalBtn blueBtn">{operateModalInfo?.button_info}</div>
//                 </div>
//             </Modal>
//         </>
//     )
// }
//
//
// export default OperateModal;
