import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Canvas from "./components/Canvas";
import Header from "./Header";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Header />}>
            <Route path="/" element={<App />}></Route>
            <Route path="/canvas" element={<Canvas />}></Route>
        </Route>
    ));

export default router;