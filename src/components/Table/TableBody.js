import React from "react";

export default function TableDataRow({ columns, rows, selected, selectOne }) {
  return (
    <>
      {rows.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <tr key={i}>
              {columns.data.map((header, i) => {
                if (header.format) {
                  return (
                    <td key={header.field} style={{ textAlign: header.align }}>
                      {header.format(item[header.field])}
                    </td>
                  );
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
          </React.Fragment>
        );
      })}
    </>
  );
}
