/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Close, Container, Content, Form, Overlay, Title } from "./styles"
import { Plus, X } from "phosphor-react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCategories } from "@hooks/useCategories"
import * as Dialog from '@radix-ui/react-dialog';
import * as zod from "zod"

const addCategorySchema = zod.object({
  name: zod.string().nonempty("This field is empty")
})

type CategoryDataType = zod.infer<typeof addCategorySchema>

export const AddCategory = () => {
  const { addCategory } = useCategories()
  const { register, handleSubmit, formState: { errors } } = useForm<CategoryDataType>({
    resolver: zodResolver(addCategorySchema)
  })

  const handleSubmitAddCategory = async (data: CategoryDataType) => {
    await addCategory(data);
  }

  return (
    <Dialog.Root>
    <Dialog.Trigger asChild>
      <Container>
        <Plus size={50} />
      </Container>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Choose category name to add</Title>
        <Form onSubmit={handleSubmit(handleSubmitAddCategory)}>
          <input 
            type="text" 
            placeholder="Category name"
            {...register("name")}
          />
          <button>Add</button>
          <p>{errors?.name?.message}</p>
        </Form>
        <Dialog.Description />
        <Close>
          <X size={24} weight="fill"/>
        </Close>
      </Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
}