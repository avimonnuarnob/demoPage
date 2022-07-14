import "./App.css";
import Table from "./components/Table/Table";

const StarIcon = ({ filled }) => (
  <svg
    height="1rem"
    fill="none"
    viewBox="0 0 24 24"
    stroke={filled ? "#FF881B" : "#BDBDBD"}
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const columns = {
  selectable: true,
  data: [
    {
      field: "image",
      title: "Image",
      sortable: true,
      format: (value) => (
        <span style={{ color: "rgba(50, 121, 227, 1)", cursor: "pointer" }}>
          {value}
        </span>
      ),
    },
    {
      field: "accession_number",
      title: "Accession number",
      sortable: true,
      format: (value) => (
        <span style={{ color: "rgba(50, 121, 227, 1)", cursor: "pointer" }}>
          {value}
        </span>
      ),
    },
    { field: "date", title: "Date", sortable: true, width: "200px" },
    {
      field: "view",
      title: "View",
      sortable: true,
    },
    {
      field: "quality",
      title: "Quality",
      sortable: true,
    },
    {
      field: "issues",
      title: "Issues",
      align: "center",
      sortable: true,
    },
    {
      field: "flagged",
      title: "Flagged",
      sortable: true,
      align: "center",
      format: (value) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {value === true ? <StarIcon filled /> : <StarIcon />}
        </div>
      ),
    },
  ],
};
const rows = [
  {
    id: 1,
    technologist: "Centro comercial Moctezuma",
    image: "Image_1",
    accession_number: "BWC5174901DSA",
    date: "03.05.2022",
    view: 211,
    quality: 11,
    bad: 111,
    issues: "0",
    flagged: true,
    select: "hello",
  },
  {
    id: 2,
    technologist: "Ame comercial Moctezuma",
    image: "Image_2",
    accession_number: "BWC5174901DSA",
    date: "03.05.2022",
    view: 511,
    quality: 11,
    bad: 11,
    issues: "0",
    flagged: false,
  },
  {
    id: 3,
    technologist: "asd ercial Moctezuma",
    image: "Image_3",
    accession_number: "BWC5174901DSA",
    date: "03.05.2022",
    view: 311,
    quality: 13,
    bad: 511,
    issues: "1",
    flagged: false,
  },
  {
    id: 4,
    technologist: "MM comercial Moctezuma",
    image: "Image_4",
    accession_number: "BWC5174901DSA",
    date: "03.05.2022",
    view: 311,
    quality: 13,
    bad: 511,
    issues: "1",
    flagged: true,
  },
  {
    id: 5,
    technologist: "SS comercial Moctezuma",
    image: "Image_5",
    accession_number: "BWC5174901DSA",
    date: "03.05.2022",
    view: 311,
    quality: 13,
    bad: 511,
    issues: "0",
    flagged: false,
  },
  {
    id: 6,
    technologist: "Lop comercial Moctezuma",
    image: "Image_6",
    accession_number: "BWC5174901DSA",
    date: "03.05.2022",
    view: 311,
    quality: 13,
    bad: 511,
    issues: "1",
    flagged: false,
  },
  {
    id: 7,
    technologist: "Lop comercial Moctezuma",
    image: "Image_7",
    accession_number: "BWC5174901DSA",
    date: "03.05.2022",
    view: 311,
    quality: 13,
    bad: 511,
    issues: "1",
    flagged: false,
  },
  {
    id: 8,
    technologist: "Lop comercial Moctezuma",
    image: "Image_8",
    accession_number: "BWC5174901DSA",
    date: "03.05.2022",
    view: 311,
    quality: 13,
    bad: 511,
    issues: "0",
    flagged: false,
  },
];

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "5rem 10rem",
        background: "#F5F5F5",
        overflow: "hidden",
      }}
    >
      <div className="card" style={{ overflow: "scroll" }}>
        <Table columns={columns} rows={rows} />
      </div>
    </div>
  );
}

export default App;
