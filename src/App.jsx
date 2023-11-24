import { Outlet } from "react-router-dom";
import MainLayout from "./Components/Layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
