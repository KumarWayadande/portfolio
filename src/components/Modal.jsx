import ReactDOM from "react-dom";

const Modal = () => {
  return ReactDOM.createPortal(
    <>
      <div className="my-3 overlay modal-wrapper bg-gray-800 fixed h-[50%] w-[100%] z-10 opacity-95 rounded-lg p-20"></div>

    
    <div className="flex flex-row fixed z-30">
      <div className="my-10 modal-container">
        <div className="text-white p-4">About</div>
        <div className="text-white p-4">Articles</div>
        <div className="text-white p-4">Projects</div>
        <div className="text-white p-4">Speaking</div>
        <div className="text-white p-4">Uses</div>
      </div>
      <div className="my-10 ">X</div>
    </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
