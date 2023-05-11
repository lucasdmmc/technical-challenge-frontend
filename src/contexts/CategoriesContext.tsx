/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { ReactNode, createContext, useEffect, useState } from "react";
import { Category } from "@components/CategoriesCard";
import { api } from "@/services/api"
import { AxiosResponse } from "axios";

interface CategoriesContextType {
  categories: Category[];
  addCategory: (category: Category) => Promise<void>;
  deleteCategory: (category: Category) => Promise<void>;
  updateCategory: (category: Category) => Promise<void>;
  allCategories: (category: Category) => Promise<void>;
}

export const CategoriesContext = createContext({} as CategoriesContextType)

interface CategoriesContextProviderProps {
  children: ReactNode
}

export const CategoriesContextProvider = ({ children }: CategoriesContextProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([])

  async function allCategories() {
    try {
      await api.get("/categories")
      .then((response: AxiosResponse) => setCategories(response.data))
    } catch (error) {
      console.log(error)
      alert("")
    }
  }

  async function addCategory(category: Category) {
    try {
      await api.post("/categories/new", category)
      .then((response: AxiosResponse) => setCategories(state => [...state, response.data]))
      alert("Category added successfully")
      allCategories();
    } catch (error) {
      console.log(error)
      alert(error);
    }
  }

  async function deleteCategory(category: Category) {
    const remove = confirm("Are you sure you want to delete this category?")
    try {
      if(remove) {
        await api.delete(`/categories/${category.id}`)
        setCategories(state => state.filter(c => c.id !== category.id))
        alert("Category deleted successfully")
        allCategories();
      }
    } catch (error) {
      console.log(error)
      alert(error);
    }
  }

  async function updateCategory(category: Category) {
    try {
      await api.put(`/categories/${category.id}`, { ...category })
      alert("Category updated successfully")
    } catch (error) {
      console.log(error)
      alert(error);
    }
  }

  useEffect(() => {
    allCategories()
  }, [])

  return (
    <CategoriesContext.Provider value={{
      categories,
      addCategory,
      allCategories,
      deleteCategory,
      updateCategory,
    }}>
      {children}
    </CategoriesContext.Provider>
  )
}