import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";


const Modal = ({ show, onClose, message, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'  onClick={handleCloseClick}>
      <div className='w-full h-full fixed z-10 top-0 left-0 bg-slate-800/75  duration-500 overflow-hidden'> </div>
      <div className='z-20 bg-white rounded-lg w-1/3 '>
        <div className='text-left text-2xl bg-gradient-to-r from-slate-800 text-white '>{title && <h3 className='m-2'>{title}</h3>}</div>

        <div className='py-4 text-left text-xl'>
          <p className='m-2 '>{message}</p>
        </div>
        <button className='w-16 rounded-lg text-white bg-slate-800 m-2 p-2 ' onClick={handleCloseClick}>OK</button>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("overlays")
    );
  } else {
    return null;
  }
};

export default Modal;
