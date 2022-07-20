import React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    style={{ width: "100%", height: "100%" }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const Title = ({ setOpenModal }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.6rem",
      }}
    >
      <div
        style={{
          margin: "0.5rem 0",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              width: "1.25rem",
              height: "1.25rem",
              borderRadius: "0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
            }}
          >
            <SvgComponent />
          </div>
        </div>
        <h3 style={{ fontWeight: 500 }}>John Doe’s image list</h3>
      </div>
      <button onClick={() => setOpenModal(true)}>Filter</button>
    </div>
  );
};

export default Title;
