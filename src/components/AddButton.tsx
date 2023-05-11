import { Plus, X } from "phosphor-react"
import { Close, AddButtonStyled, Content, Overlay, Title } from "@/styles/components/AddButton"
import * as Dialog from '@radix-ui/react-dialog';
import { AddProductForm } from "@components/AddProductForm";

export const AddButton = () => {
  return (
    <Dialog.Root>
    <Dialog.Trigger asChild>
      <AddButtonStyled>
        <Plus size={50} />
      </AddButtonStyled>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Product</Title>
        <AddProductForm />
        <Close>
          <X size={24} weight="fill"/>
        </Close>
      </Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
}