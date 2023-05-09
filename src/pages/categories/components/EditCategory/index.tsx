/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as Dialog from '@radix-ui/react-dialog';
import { PencilSimpleLine, X } from 'phosphor-react';
import { Close, Content, CurrentCategoryWrapper, EditCategoryWrapper, Overlay, Title } from './styles';
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
// @ts-ignore
import { useCategories } from "../../../../hooks/useCategories"
import { useState } from 'react';
import { Category } from '../CategoriesCard';

const editCategorySchema = zod.object({
  name: zod.string().nonempty("This field is required")
})

type EditCategoryDataType = zod.infer<typeof editCategorySchema>

interface EditCategoryProps {
  category: Category
}

export const EditCategory = ({ category }: EditCategoryProps) => {
  const { updateCategory } = useCategories()
  const { register, handleSubmit } = useForm<EditCategoryDataType>({
    resolver: zodResolver(editCategorySchema)
  })

  const handleSubmitEditCategory = async (data: EditCategoryDataType) => {
    await updateCategory({ name: data.name, id: category.id })
    console.log(data)
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