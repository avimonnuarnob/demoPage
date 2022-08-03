import { AiOutlineFilter } from "react-icons/ai";
import { GrPrevious } from "react-icons/gr";

const Title = ({ setOpenModal, chips }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
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
              // width: "1.25rem",
              // height: "1.25rem",
              borderRadius: "0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "7px",
              cursor: "pointer",
            }}
          >
            <GrPrevious />
          </div>
        </div>
        <h3 style={{ fontWeight: 500 }}>John Doe’s image list</h3>
      </div>
      <button
        onClick={() => setOpenModal(true)}
        style={{
          backgroundColor: "#fff",
          padding: "0.25rem 0.5rem",
          borderRadius: "8px",
          border: "1px solid #E4E4E4",
          display: "flex",
          gap: "0.6rem",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <AiOutlineFilter />
        <span>Filters</span>
        {chips.length ? (
          <span
            style={{
              width: "1rem",
              height: "1rem",
              backgroundColor: "#1EADC0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              color: "#fff",
            }}
          >
            {chips.length}
          </span>
        ) : null}
      </button>
    </div>
  );
};

export default Title;
