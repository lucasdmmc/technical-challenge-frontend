import { Route, Routes } from "react-router-dom";
import { Categories } from "@/pages/categories";
import { Products } from "@/pages/products";
import { BothPages } from "@/pages/bothPages";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<BothPages />}></Route>
    <Route path="/categories" element={<Categories />}></Route>
    <Route path="/products" element={<Products />}></Route>
  </Routes>
)