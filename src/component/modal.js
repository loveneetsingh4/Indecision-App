import React from "react";
import Modal from "react-modal";

const OptionModal=(props)=>(
   <Modal  
     isOpen={!!props.slectedoption}
       ariaHideApp={false}
       onRequestClose={props.handleclear}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
         className="modal" 
   >


       <h2  className="modal__title">slected model</h2>
       {props.slectedoption && <p className="modal__body">{props.slectedoption}</p>}
       <button 
         className="button"
       onClick={props.handleclear}>okay</button>
   </Modal>  
);

export default OptionModal;