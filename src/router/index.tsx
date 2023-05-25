import App from '../views/App';
import Home from '../views/Home';

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/app",
    element: <App/>
  }
]);

export default router;