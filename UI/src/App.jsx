import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ResetPassword from "./components/resetPassword.jsx";
// import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/resetPassword" element={<ResetPassword />} />

        {/* Route to the Main component */}
        {/* <Route path="/main" element={<Main />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
