import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import InfoPenawar from "./pages/InfoPenawar"
import InfoProduk from "./pages/InfoProduk";
import ProductPageBuyer from "./pages/ProductPageBuyer"
import ProductPage from "./pages/ProductPage"
import DaftarJual from "./pages/DaftarJual";
import Diminati from "./pages/Product/Diminati";
import Terjual from "./pages/Product/Terjual";
import ProductList from "./pages/Product/ProductList";
import Wishlist from "./pages/Product/Wishlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/info-penawar" element={<InfoPenawar />} />
        <Route path="/tambah-product" element={<InfoProduk />} />
        <Route path="/product/:id" element={<ProductPageBuyer />} />
        <Route path="/product-seller" element={<ProductPage />} />
        <Route path="/daftar-jual" element={<DaftarJual />} />

        <Route path="product/"  >
          <Route index element={<ProductList />} />
          {/* <Route path="product/:id" element={<ProductPagebuyer />} /> */}
          {/* <Route path="productpreview/:id" element={<ProductPreview />} /> */}
          <Route path="addproduct" element={<InfoProduk />} />
          {/* <Route path="editproduct" element={<EditProduct />} /> */}
          <Route path="diminati" element={<Diminati />} />
          <Route path="terjual" element={<Terjual />} />
          <Route path="wishlist" element={<Wishlist />} />
          {/* <Route path="infopenawaran" element={<InfoPenawaran />} /> */}
        </Route>
        {/* <Route path="notification" element={<Notification />} />
        <Route path="infoprofile" element={<InfoProfile />} /> */}
      </Routes>
    </div >
  );
}

export default App;
