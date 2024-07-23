import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Header from "./Header";
import Three from "./components/Three";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Header />}>
      <Route path="/" element={<App />}></Route>
      <Route path="/three" element={<Three />}></Route>
    </Route>
  )
);

export default router;
