import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    BrowserRouter
} from 'react-router-dom';
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Component} from "react";
import LoginPage from "./pages/LoginPage";

function AppLayout() {
    return (
        <div>
            <Nav/>
            <Outlet id="outlet"/>
            <Footer/>
        </div>
    );
}



const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<AppLayout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="hotel-page" element={<HotelPage/>}/>
        <Route path="login" element={<LoginPage />}/>
        <Route path="*" element={<div>404</div>}/>
    </Route>
));

const App = () => <RouterProvider router={router}/>;
export default App;
