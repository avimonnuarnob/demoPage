import React, { useState } from "react";
import styles from "./styles/table.module.css";

export default function TableDataRow({ columns, rows, selected, selectOne }) {
  const [expanding, setExpanding] = useState([]);

  const onClickHandler = (id) => {
    if (expanding.includes(id)) {
      const newArr = expanding.filter((el) => el !== id);
      setExpanding(newArr);
    } else {
      setExpanding([...expanding, id]);
    }
  };

  return (
    <>
      {rows.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <tr key={i}>
              {columns.data.map((header, i) => {
                if (header.format) {
                  if (columns.expandable) {
                    return (
                      <td
                        key={header.field}
                        style={{ textAlign: header.align }}
                      >
                        {header.format(
                          item[header.field],
                          expanding.includes(item.id),
                          () => onClickHandler(item?.id)
                        )}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        key={header.field}
                        style={{ textAlign: header.align }}
                      >
                        {header.format(item[header.field])}
                      </td>
                    );
                  }
                }
                return (
                  <td key={header.field} style={{ textAlign: header.align }}>
                    {item[header.field]}
                  </td>
                );
              })}
              {columns.selectable ? (
                <td>
                  <input
                    type="checkbox"
                    onChange={() => selectOne(item?.id)}
                    checked={selected.includes(item?.id) ? true : false}
                  />
                </td>
              ) : null}
            </tr>

            {/* SubData */}
            {item?.subData?.length &&
              item?.subData?.map((subItem, index, arr) => {
                return (
                  <tr
                    className={[
                      styles.collapse,
                      expanding.includes(item.id)
                        ? styles["collapse__open"]
                        : null,
                      index + 1 === arr.length
                        ? styles["collapse--last"]
                        : null,
                    ].join(" ")}
                    key={subItem?.id}
                  >
                    {columns?.subData?.map((header, i) => {
                      if (header.format) {
                        return (
                          <td
                            key={header.field}
                            style={{ textAlign: header.align }}
                          >
                            {header.format(subItem[header.field])}
                          </td>
                        );
                      }
                      return (
                        <td
                          key={header.field}
                          style={{ textAlign: header.align }}
                        >
                          {subItem[header.field]}
                        </td>
                      );
                    })}
                    {columns.selectable ? (
                      <td>
                        <input
                          type="checkbox"
                          onChange={() => selectOne(subItem?.id)}
                          checked={
                            selected.includes(subItem?.id) ||
                            selected.includes(item?.id)
                              ? true
                              : false
                          }
                        />
                      </td>
                    ) : null}
                  </tr>
                );
              })}
          </React.Fragment>
        );
      })}
    </>
  );
}
