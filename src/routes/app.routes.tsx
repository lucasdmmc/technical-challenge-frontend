import { Route, Routes } from "react-router-dom";
import { Categories } from "@pages/Categories";
import { Products } from "@pages/Products";
import { LinkPage } from "@pages/LinkPage";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LinkPage />}></Route>
    <Route path="/categories" element={<Categories />}></Route>
    <Route path="/products" element={<Products />}></Route>
  </Routes>
)