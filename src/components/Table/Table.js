import React, { useState, useEffect } from "react";
import "./styles/table.module.css";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default function Table({ columns, rows }) {
  const [selected, setSelected] = useState([]);
  const [sortableFields, setSortableFields] = useState([]);
  const [tableData, setTableData] = useState(rows);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "ASC" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const selectAll = () => {
    if (selected.length === rows.length) {
      setSelected([]);
    } else {
      setSelected(rows.map((row) => row?.id));
    }
  };

  const selectOne = (id) => {
    const one = selected.find((item) => item === id);
    if (one) {
      const deleted = selected.filter((item) => item !== id);
      setSelected(deleted);
    } else {
      setSelected([...selected, id]);
    }
  };

  useEffect(() => {
    sortableFields.forEach((item) => {
      handleSorting(item.name, item.order);
    });
    console.log(sortableFields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortableFields]);

  return (
    <table>
      <thead>
        <TableHeader
          columns={columns}
          rows={tableData}
          sortableFields={sortableFields}
          setSortableFields={setSortableFields}
          selectAll={selectAll}
          selected={selected}
        />
      </thead>
      <tbody>
        <TableBody
          columns={columns}
          rows={tableData}
          selectOne={selectOne}
          selected={selected}
        />
      </tbody>
    </table>
  );
}
