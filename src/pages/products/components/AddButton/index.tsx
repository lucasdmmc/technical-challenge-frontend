import { Plus, X } from "phosphor-react"
import { Close, AddButtonStyled, Content, Overlay, Title } from "./styles"
import * as Dialog from '@radix-ui/react-dialog';
import { FormAddProduct } from "@products/FormAddProduct";

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
        <FormAddProduct />
        <Close>
          <X size={24} weight="fill"/>
        </Close>
      </Content>
    </Dialog.Portal>
  </Dialog.Root>
  )
}