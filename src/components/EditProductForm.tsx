/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Field, FieldsWrapper, Form } from "@styles/components/EditProductForm"
// @ts-ignore
import { useProducts } from "@hooks/useProducts"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "./ProductCard";
import * as zod from "zod"

const editProductValidationSchema = zod.object({
  name: zod.string().nonempty("This field is empty"),
  category: zod.string().nonempty("This field is empty"),
  price: zod.coerce.number().min(1, "This field is empty"),
})

type EditProductDataType = zod.infer<typeof editProductValidationSchema>

interface FormEditProductProps {
  product: Product
}

export const EditProductForm = ({ product }: FormEditProductProps ) => {
  const { updateProduct, allProducts } = useProducts()
  const { register, handleSubmit, formState: { errors }} = useForm<EditProductDataType>({
    resolver: zodResolver(editProductValidationSchema),
    defaultValues: { ...product } 
  })

  const handleSubmitEditProduct = async (data: EditProductDataType) => {
    await updateProduct({...data, id: product.id})
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
          <p>{errors?.name?.message}</p>
        </Field>
        <Field>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            placeholder="Category"
            {...register("category")}
          />
          <p>{errors?.category?.message}</p>
        </Field>
        <Field>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            inputMode="decimal"
            placeholder="$ 00,00"
            {...register("price")}
          />
          <p>{errors?.price?.message}</p>

        </Field>
      </FieldsWrapper>
        <button type="submit">Save</button>
    </Form>
  )
}