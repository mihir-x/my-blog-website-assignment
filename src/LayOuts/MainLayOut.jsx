import { Outlet } from "react-router-dom";
import BlogNavBar from "../Components/Navbar/BlogNavBar";


const MainLayOut = () => {
    return (
        <div>
            <BlogNavBar></BlogNavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;