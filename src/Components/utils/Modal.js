const Overlay = ({ children }) => {
  return (
    <div className=" absolute bg-black  h-full w-full top-0 left-0">
      {children}
    </div>
  );
};

const Modal = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

export default Modal;
