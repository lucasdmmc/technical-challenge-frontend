import { AddButton } from "./components/AddButton"
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
        <AddButton />
      </Wrapper>
    </Container>
  )
}