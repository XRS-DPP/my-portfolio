const Modal = ({ children }) => {
  return (
    <div className="absolute w-full h-full border border-red-500 ">
      {children}
    </div>
  );
};

export default Modal;
