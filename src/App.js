import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { CartProvider } from "./store/cartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Routes with AppBar */}
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          {/* Routes without AppBar */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
