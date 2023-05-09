/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Plus, X } from "phosphor-react"
import { Close, Container, Content, Form, Overlay, Title } from "./styles"
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
// @ts-ignore
import { useCategories } from "../../../../hooks/useCategories"

const addCategorySchema = zod.object({
  name: zod.string().nonempty("This field is required")
})

type CategoryDataType = zod.infer<typeof addCategorySchema>

export const AddCategory = () => {
  const {createCategory} = useCategories()
  const { register, handleSubmit } = useForm<CategoryDataType>({
    resolver: zodResolver(addCategorySchema)
  })

  const handleSubmitAddCategory = async (data: CategoryDataType) => {
    await createCategory(data);
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