import { useLocation } from "react-router-dom";

export default function Account() {
  const location = useLocation();
  const { email, role } = location.state || {};

  return (
    <div>
      <h2>Chào mừng, {email}</h2>
      <p>Quyền truy cập: {role}</p>
    </div>
  );
}