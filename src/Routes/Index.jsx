import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import Dashboard from "../Dashboard/Dashboard";
import List from "../Dashboard/EmployeeList/List";
import EmployeeDetails from "../Dashboard/EmployeeDetails/EmployeeDetails";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import Progress from "../Dashboard/Progress/Progress";
import AllEmployees from "../Dashboard/AllEmployees/AllEmployees";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import WorkSheet from "../Dashboard/workSheet/WorkSheet";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      { path: "employee-list", element: <List /> },
      { path: "all-employee-list", element: <AllEmployees /> },
      {
        path: "details",
        element: <EmployeeDetails />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "work-sheet",
        element: <WorkSheet />,
      },
    ],
  },
]);

export default Routes;
