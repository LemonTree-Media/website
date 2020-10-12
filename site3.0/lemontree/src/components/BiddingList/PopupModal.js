import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ThankYou from '../../assets/ThankYou.svg';

function PopupModal(props) {
  return (
    <Modal 
      {...props}
      size="lg"
      className="thank-you-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
   
       <img src={ThankYou} alt="LemonTree Media Thank You" />
      
      
         <Button onClick={props.onHide}>Return to Home Page</Button>
     
    </Modal>
  );
}

export default PopupModal;