import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRouter({ children }) {
  const location = useLocation();
  const isAuthenticated = location.state?.email && location.state?.role;

  return isAuthenticated ? children : <Navigate to="/login" />;
}