import React, { useState } from "react";

const Tabs = ({ children, tabs }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          borderBottom: "1px solid #E3E3E3",
          cursor: "pointer",
        }}
      >
        {tabs.map((tab, index) => {
          return (
            <p
              key={tab}
              onClick={() => setActiveIndex(index)}
              style={{
                padding: "1rem",
                borderBottom:
                  activeIndex === index ? "3px solid #5193F5" : "none",
                transition: "all 0.2s",
              }}
            >
              {tab}
            </p>
          );
        })}
      </div>

      <div>
        {children.map((el, index) => {
          return (
            <div
              style={{
                display: activeIndex === index ? "block" : "none",
              }}
            >
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
