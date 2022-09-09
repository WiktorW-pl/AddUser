import React from 'react';
import ReactDOM from 'react-dom';

import './ErrorModal.css';

const Backdrop = props =>{
    return <div  onClick={props.confirm} className="backdrop" />
}
const ModalOverlay = props =>{
    return (
        <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.msg}</p>
        </div>
        <footer className="actions">
          <button onClick={props.confirm}>Okay</button>
        </footer>
      </div>
    )
}

const ErrorModal = (props) => {
  return (
    <>
     {ReactDOM.createPortal(<Backdrop confirm={props.confirm} />, document.getElementById('backdrop-root'))}
     {ReactDOM.createPortal(<ModalOverlay title={props.title} msg={props.msg} confirm={props.confirm} />, document.getElementById('modal-root'))}
    </>
  );
};

export default ErrorModal;