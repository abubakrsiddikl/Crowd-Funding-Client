import React, { useContext } from "react";

import { Navigate} from "react-router-dom";
import { AuthContext } from "../components/Auth/AuthProvider";

const PrivateRoute = ({ children }) => {
//   const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate  to={"/login"}></Navigate>
    </div>
  );
};

export default PrivateRoute;
