import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import LoadingPage from "../Pages/LoadingPage/LoadingPage";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <LoadingPage></LoadingPage>
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}