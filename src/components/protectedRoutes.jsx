import { Navigate, useLocation } from "react-router";
import { useAuth } from "./useAuth";

function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/singin" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoutes;
