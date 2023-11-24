import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default Routes;
