const Modal = ({ openModal, setOpenModal, children }) => {
  return (
    <div className={`dialog ${openModal ? "dialog--open " : ""}`}>
      <div className="dialog__body">
        <div className="dialog__header">
          <h2 style={{ fontWeight: 500 }}>Filters</h2>
          <button className="dialog__close" onClick={() => setOpenModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="dialog__content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
