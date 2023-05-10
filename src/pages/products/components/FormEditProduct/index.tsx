/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Field, FieldsWrapper, Form } from "./styles"
// @ts-ignore
import { useProducts } from "../../../../hooks/useProducts"
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
  const { updateProduct, allProducts } = useProducts()
  const { register, handleSubmit, reset } = useForm<EditProductDataType>({
    resolver: zodResolver(editProductValidationSchema)
  })

  const handleSubmitEditProduct = async (data: EditProductDataType) => {
    await updateProduct({...data, id: product.id})
    reset();
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