/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { useCategories } from "@hooks/useCategories"
import { Close, Content, CurrentCategoryWrapper, EditCategoryWrapper, Overlay, Title } from '@styles/components/EditCategory';
import { PencilSimpleLine, X } from 'phosphor-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category } from './CategoryCard';
import * as zod from "zod"
import * as Dialog from '@radix-ui/react-dialog';

const editCategorySchema = zod.object({
  name: zod.string().nonempty("This field is empty")
})

type EditCategoryDataType = zod.infer<typeof editCategorySchema>

interface EditCategoryProps {
  category: Category
}

export const EditCategory = ({ category }: EditCategoryProps) => {
  const { updateCategory } = useCategories()
  const { register, handleSubmit, formState: { errors } } = useForm<EditCategoryDataType>({
    resolver: zodResolver(editCategorySchema),
    defaultValues: { name: category.name}
  })

  const handleSubmitEditCategory = async (data: EditCategoryDataType) => {
    await updateCategory({ name: data.name, id: category.id })
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <PencilSimpleLine
          size={22}
          weight="fill"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Edit category</Title>
          <CurrentCategoryWrapper>
            <span>Current name: {category.name}</span>
          </CurrentCategoryWrapper>
          <EditCategoryWrapper onSubmit={handleSubmit(handleSubmitEditCategory)}>
            <input
              type="text" 
              placeholder="Choose category name"
              {...register("name")}
            />
            <button type='submit'>Edit</button>
            <p>{errors?.name?.message}</p>
          </EditCategoryWrapper>
          <Dialog.Description />
          <Close>
            <X size={24} weight="fill"/>
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}