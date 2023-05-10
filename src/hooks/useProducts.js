import { useContext } from "react"
import { ProductsContext } from "@/contexts/ProductsContext"

export const useProducts = () => {
  const context = useContext(ProductsContext)

  return context
}