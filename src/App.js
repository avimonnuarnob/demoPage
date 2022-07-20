import ImageListPage from "./pages/managerDashboard/imageListPage";
import { BreadcrumbProvider } from "./contexts/BreadcrumbContext";

function App() {
  return (
    <BreadcrumbProvider>
      <div style={{ height: "64px", backgroundColor: "white" }}></div>
      <ImageListPage />
    </BreadcrumbProvider>
  );
}

export default App;
