/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReactNode, createContext, useEffect, useState } from "react";
import { Category } from "../pages/categories/components/CategoriesCard";
// @ts-ignore
import { api } from "../services/api"
import { AxiosResponse } from "axios";
import { Product } from "../pages/products/components/ProductCard";

interface CategoriesContextType {
  categories: Category[];
  products: Product[];
  createCategory: (category: Category) => Promise<void>;
  deleteCategory: (category: Category) => Promise<void>;
  updateCategory: (category: Category) => Promise<void>;
  createProduct: (product: Product) => Promise<void>;
  deleteProduct: (product: Product) => Promise<void>;
  updateProduct: (product: Product) => Promise<void>;
  allProducts: () => Promise<void>
}

export const CategoriesContext = createContext({} as CategoriesContextType)

interface CategoriesContextProviderProps {
  children: ReactNode
}

export const CategoriesContextProvider = ({ children }: CategoriesContextProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])

  
  async function allCategories() {
    try {
      await api.get<Category[]>("/categories").then(
        (response: AxiosResponse) => setCategories(response.data)
      )
    } catch (err) {
      console.log(err)
    }
  }

  async function allProducts() {
    try {
      await api.get<Product[]>("/products").then(
        (response: AxiosResponse) => setProducts(response.data)
      )
    } catch (err) {
      console.log(err)
    }
  }

  async function createCategory(category: Category) {
    try {
      await api.post("/categories/new", category).then(
        (response: AxiosResponse) => setCategories(state => [...state, response.data])
      )
      allCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function createProduct(product: Product) {
    try {
      await api.post("/products/new", product).then(
        (response: AxiosResponse) => setProducts(state => [...state, response.data])
      )
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteCategory(category: Category) {
    try {
      const response = await api.delete(`/categories/${category.id}`)
      setCategories(state => state.filter(c => c.id !== category.id))
      console.log(response)
      allCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteProduct(product: Product) {
    try {
      const response = await api.delete(`/products/${product.id}`)
      setProducts(state => state.filter(p => p.id !== product.id))
      console.log(response)
      // allProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function updateCategory(category: Category) {
    console.log(category)
    try {
      const response = await api.put(`/categories/${category.id}`, { name: category.name})
      const update = {...response.data, name: category.name}
      setCategories(state => state.map(c => c.id === category.id ? { ...c, name: category.name } : c))
      console.log(update)
      // allCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function updateProduct(product: Product) {
    try {
      const dataProduct = {
        name: product.name,
        category: product.category,
        price: product.price
      }
      const response = await api.put(`/products/${product.id}`, dataProduct)
      const update = {...response.data, name: product.name, category: product.category, price: product.price}
      setProducts(state => state.map(p => p.id === product.id ? { ...p, name: product.name } : p))
      console.log(update)
      // allProducts();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    allCategories()
    allProducts()
  }, [])
  return (
    <CategoriesContext.Provider value={{
      categories,
      products,
      createCategory,
      deleteCategory,
      updateCategory,
      createProduct,
      deleteProduct,
      updateProduct,
      allProducts
    }}>
      {children}
    </CategoriesContext.Provider>
  )
}