import styles from "./Chips.module.css";

const ChipsContainer = ({ chips, setChips }) => {
  const deleteOne = (key) => {
    const newChipsArr = chips.filter((chip) => chip.key !== key);
    setChips(newChipsArr);
  };

  const deleteAll = () => {
    setChips([]);
  };

  return (
    <>
      {chips.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1rem",
            fontSize: "0.875rem",
          }}
        >
          <span>Filters: </span>
          {chips.map((chip) => (
            <div
              key={chip.key}
              style={{
                background: "#e7e7e7",
                padding: "0.25rem 0.75rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "12px",
                fontWeight: 500,
              }}
            >
              <span>{chip.title}</span>
              <button
                className={styles.btn__close}
                onClick={() => deleteOne(chip.key)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
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
          ))}
          <p
            style={{ color: "#FF2828", cursor: "pointer" }}
            onClick={deleteAll}
          >
            Clear all
          </p>
        </div>
      ) : null}
    </>
  );
};

export default ChipsContainer;
