import { Plus, X } from "phosphor-react"
import { Close, Container, Content, Overlay, Title } from "./styles"
import * as Dialog from '@radix-ui/react-dialog';
import { FormAddProduct } from "../FormAddProduct";

export const AddProduct = () => {
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