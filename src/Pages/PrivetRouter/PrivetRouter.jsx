import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({children}) => {
   
    

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
console.log(location.pathname);
    if(loading){
        return <div></div>
    }
    if(user){
return children;
    }

    return <Navigate state={location.pathname} to='/log-in'></Navigate>
};

export default PrivetRouter;