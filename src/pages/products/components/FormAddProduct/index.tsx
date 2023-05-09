/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Field, FieldsWrapper, Form } from "./styles"
// @ts-ignore
import { useCategories } from "../../../../hooks/useCategories"
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const addProductValidationSchema = zod.object({
  name: zod.string(),
  category: zod.string(),
  price: zod.string(),
})

type AddProductDataType = zod.infer<typeof addProductValidationSchema>

export const FormAddProduct = () => {
  const { createProduct, allProducts } = useCategories()
  const {register, handleSubmit} = useForm<AddProductDataType>({
    resolver: zodResolver(addProductValidationSchema)
  })

  const handleSubmitAddProduct = async (data: AddProductDataType) => {
    await createProduct(data)
    allProducts();
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitAddProduct)}>
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
            placeholder="US 00.00"
            {...register("price")}

          />
        </Field>
      </FieldsWrapper>

      <button type="submit">Add Product</button>
    </Form>
  )
}