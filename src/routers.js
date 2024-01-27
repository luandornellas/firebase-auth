import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login/login";
import Registro from "./pages/registro/registro";
import DashBoard from "./pages/dashboard/dashboard";

export default function Routers(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login/> }/>
                <Route path="/registrar" element={ <Registro/>} />
                <Route path="/dashBoard" element={ <DashBoard/>} />
            </Routes>
        </BrowserRouter>
    );
}