import "./App.css";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import { BreadcrumbProvider } from "./contexts/BreadcrumbContext";
import ImageList from "./pages/managerDashboard/imageList";

function App() {
  return (
    <BreadcrumbProvider>
      <div style={{ height: "100px", backgroundColor: "white" }}></div>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem 5rem",
          background: "#F5F5F5",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <Breadcrumb />
        <ImageList />
      </div>
    </BreadcrumbProvider>
  );
}

export default App;
