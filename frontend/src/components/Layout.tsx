import { Outlet } from "react-router-dom";
import NavBar from "./layout/NavBar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Layout;
