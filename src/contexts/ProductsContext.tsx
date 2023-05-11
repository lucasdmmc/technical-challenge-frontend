// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "@/services/api"
import { AxiosResponse } from "axios";
import { Product } from "@components/ProductCard";

interface ProductsContextType {
  products: Product[];
  allProducts: () => Promise<void>
  addProduct: (product: Product) => Promise<void>;
  deleteProduct: (product: Product) => Promise<void>;
  updateProduct: (product: Product) => Promise<void>;
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

export const ProductsContextProvider = ({ children }: ProductsContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>([])

  async function allProducts() {
    try {
      await api.get("/products")
      .then((response: AxiosResponse) => setProducts(response.data))
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  async function addProduct(product: Product) {
    try {
      await api.post("/products/new", product)
      .then((response: AxiosResponse) => setProducts(state => [...state, response.data]))
      alert("Product added successfully")
    } catch (error) {
      console.log(error)
      alert(error);
    }
  }

  async function deleteProduct(product: Product) {
    const remove = confirm("Are you sure you want to delete this product?")
    if(remove) {
      await api.delete(`/products/${product.id}`)
      setProducts(state => state.filter(p => p.id !== product.id))
      alert("Product deleted successfully")
    }
    try {
    } catch (error) {
      console.log(error)
      alert(error);
    }
  }

  async function updateProduct(product: Product) {
    try {
      await api.put(`/products/${product.id}`, { ...product })
      alert("Product updated successfully")
    } catch (error) {
      console.log(error)
      alert(error);
    }
  }

  useEffect(() => {
    allProducts()
  }, [])

  return (
    <ProductsContext.Provider value={{
      products,
      addProduct,
      allProducts,
      deleteProduct,
      updateProduct,
    }}>
      {children}
    </ProductsContext.Provider>
  )
}