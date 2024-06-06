import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { SignIn } from "./pages/signin-signup/SignIn";
import SignUp from "./pages/signin-signup/SignUp";
import { Product } from "./pages/product/Product";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />

        {/* Private route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
