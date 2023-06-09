import * as Dialog from '@radix-ui/react-dialog';
import { PencilSimpleLine, X } from 'phosphor-react';
import { Close, Content, Overlay, Title } from '@styles/components/EditProduct';
import { EditProductForm } from './EditProductForm';
import { Product } from './ProductCard';

interface EditProductProps {
  product: Product
}

export const EditProduct = ({ product }: EditProductProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild >
        <PencilSimpleLine size={20} weight='fill'/>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Edit Product</Title>
            <EditProductForm product={product}/>
          <Dialog.Description />
          <Close>
            <X size={24} weight="fill"/>
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}