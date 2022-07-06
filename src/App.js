import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import InfoPenawar from "./pages/InfoPenawar"
import InfoProduk from "./pages/InfoProduk";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/info-penawar" element={<InfoPenawar />} />
        <Route path="/info-product" element={<InfoProduk />} />
      </Routes>
    </div>
  );
}

export default App;
