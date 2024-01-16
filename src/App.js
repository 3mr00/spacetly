import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import VerifyAccount from "./components/Auth/VerifyAccount/VerifyAccount";
import NewPassword from "./components/Auth/NewPassword/NewPassword";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyaccount" element={<VerifyAccount />} />
        <Route path="/newpassword" element={<NewPassword />} />
      </Routes>
    </div>
  );
}

export default App;
