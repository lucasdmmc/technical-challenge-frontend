/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { useProducts } from "@hooks/useProducts"
import { Container, Wrapper } from "@styles/components/ProductCard"
import { EditProduct } from "./EditProduct";
import { Fragment } from "react";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export const ProductCard = () => {
  const {products, deleteProduct} = useProducts()
  return (
    <Fragment>
      {products.map((product: Product) => (
        <Container key={String(product.id)}>
          <Wrapper>
            <span>Name: {product.name}</span>
            <span>Category: {product.category}</span>
            <span>Price: {product.price}</span>
            <button onClick={() => deleteProduct(product)}>Remove</button>
          </Wrapper>
          <EditProduct product={product}/>
        </Container>
      ))}
    </Fragment>
  )
}