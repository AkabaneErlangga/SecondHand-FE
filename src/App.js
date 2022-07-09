import { Route, Routes } from "react-router-dom";
import ProductPageBuyer from "./pages/ProductPageBuyer"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/product" element={<ProductPageBuyer />} />
        <Route path="/product-seller" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;