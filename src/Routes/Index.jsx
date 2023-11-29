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
import AdminRoute from "./AdminRoute";
import HRRoute from "./HRRoute";
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../Pages/Contact/Contact";

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
      { path: "contact-us", element: <Contact /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "employee-list",
        element: (
          <HRRoute>
            <List />
          </HRRoute>
        ),
      },
      {
        path: "all-employee-list",
        element: (
          <AdminRoute>
            <AllEmployees />
          </AdminRoute>
        ),
      },
      {
        path: "details/:email",
        element: (
          <HRRoute>
            <EmployeeDetails />
          </HRRoute>
        ),
      },
      {
        path: "progress",
        element: (
          <HRRoute>
            <Progress />
          </HRRoute>
        ),
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
