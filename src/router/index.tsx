import App from '../views/App';
import Home from '../views/Home';
import Test from '../views/Test';
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <App/>
  }
]);

export default router;