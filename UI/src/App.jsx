import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ResetPassword from "./components/resetPassword.jsx";
import Main from "./components/Main.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/resetPassword" element={<ResetPassword />} />

        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}
export default App;
