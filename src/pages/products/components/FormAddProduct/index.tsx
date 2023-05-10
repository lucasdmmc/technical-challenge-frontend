// @ts-ignore
import { useProducts } from "@hooks/useProducts"
import { Field, FieldsWrapper, Form } from "./styles"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"

const addProductValidationSchema = zod.object({
  name: zod.string().nonempty("Name is required"),
  category: zod.string().nonempty("Category is required"),
  price: zod.coerce.number().min(1, "Price is required"),
})

type AddProductDataType = zod.infer<typeof addProductValidationSchema>

export const FormAddProduct = () => {
  const { addProduct, allProducts } = useProducts()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AddProductDataType>({
    resolver: zodResolver(addProductValidationSchema)
  })

  const handleSubmitAddProduct = async (data: AddProductDataType) => {
    await addProduct(data)
    reset();
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
            placeholder="US 00.00"
            {...register("price")}

          />
          <p>{errors?.price?.message}</p>
        </Field>
      </FieldsWrapper>

      <button type="submit">Add Product</button>
    </Form>
  )
}