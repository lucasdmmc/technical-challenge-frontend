import { AddProduct } from "./components/AddProduct"
import { ProductCard } from "./components/ProductCard"
import { Container, Wrapper } from "./styles"

export const Products = () => {
  return (
    <Container>
      <header>
        <h1>Products</h1>
      </header>
      <Wrapper>
        <ProductCard />
        <AddProduct />
      </Wrapper>
    </Container>
  )
}