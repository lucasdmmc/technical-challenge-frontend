import { useContext } from "react"
import { CategoriesContext } from "@contexts/CategoriesContext"

export const useCategories = () => {
  const context = useContext(CategoriesContext)

  return context
}