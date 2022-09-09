import React from 'react';

import './ErrorModal.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div  onClick={props.confirm} className="backdrop" />
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
    </div>
  );
};

export default ErrorModal;