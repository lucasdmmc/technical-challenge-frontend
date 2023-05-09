/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Field, FieldsWrapper, Form } from "./styles"
// @ts-ignore
import { useCategories } from "../../../../hooks/useCategories"
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "../ProductCard";

const editProductValidationSchema = zod.object({
  name: zod.string(),
  category: zod.string(),
  price: zod.string(),
})

type EditProductDataType = zod.infer<typeof editProductValidationSchema>

interface FormEditProductProps {
  product: Product
}

export const FormEditProduct = ({ product }: FormEditProductProps ) => {
  const { updateProduct, allProducts } = useCategories()
  const {register, handleSubmit} = useForm<EditProductDataType>({
    resolver: zodResolver(editProductValidationSchema)
  })

  const handleSubmitEditProduct = async (data: EditProductDataType) => {
    console.log(data)
    await updateProduct({ name: data.name, category: data.category, price: data.price, id: product.id })
    allProducts()
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitEditProduct)}>
      <FieldsWrapper>
        <Field>
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            type="text" 
            placeholder="Product name"
            {...register("name")}
          />
        </Field>
        <Field>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            placeholder="Category"
            {...register("category")}

          />
        </Field>
        <Field>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            placeholder="$ 00.00"
            {...register("price")}

          />
        </Field>
      </FieldsWrapper>

      <button type="submit">Save</button>
    </Form>
  )
}