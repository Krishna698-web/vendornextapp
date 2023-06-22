const BackDrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className=" absolute bg-black  h-full w-full top-0 left-0"></div>
  );
};

const Overlay = ({ children }) => {
  return <div>{children}</div>;
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
