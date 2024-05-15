import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Outlet} from 'react-router-dom';
import Home from "./Pages/Home";
import HotelPage from "./Pages/HotelPage";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";


function AppLayout() {
	return (
		<div>
			<Nav />
			<Outlet id="outlet" />
			<Footer/>
		</div>
	);
}

const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={<AppLayout/>}>
		<Route path="" element={<Home/>}/>
		<Route path="hotel-page" element={<HotelPage/>}/>
		<Route path="*" element={<div>404</div>}/>
	</Route>
))


const App = () => <RouterProvider router={router}/>
export default App;