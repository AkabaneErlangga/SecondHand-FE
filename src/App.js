<<<<<<< Updated upstream
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
=======
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import InfoProduk from "./components/InfoProduk";
import InfoPenawar from "./components/InfoPenawar";


function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Profile /> */}
      {/* <InfoProduk /> */}
      <InfoPenawar/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
