import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../component/componentplus/Login";
import Account from "../component/componentplus/Account";
import PrivateRouter from "../component/componentplus/PrivateRouter";

function Exercise05_06() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/account"
          element={
            <PrivateRouter>
              <Account />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
}

export default Exercise05_06;