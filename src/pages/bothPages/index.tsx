import { Button, Container } from "./styles"

export const BothPages = () => {
  return (
    <Container>
      <Button to="/categories">Categories</Button>
      <Button to="/products">Products</Button>
    </Container>
  )
}