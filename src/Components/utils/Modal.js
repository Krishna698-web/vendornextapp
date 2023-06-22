import ReactDOM from "react-dom";

const BackDrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="absolute bg-black bg-opacity-50 h-full w-full top-0 left-0 cursor-pointer z-10"></div>
  );
};

const Overlay = ({ children }) => {
  return (
    <div className="absolute top-1/3 left-1/3 py-3 px-5 bg-white rounded-sm drop-shadow-lg z-10">
      {children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
