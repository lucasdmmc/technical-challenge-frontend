import { Container, Wrapper } from "@styles/pages/Products"
import { AddButton } from "@components/AddButton"
import { ProductCard } from "@components/ProductCard"

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