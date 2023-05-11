import { Button, Container } from "@styles/pages/LinkPage"

export const LinkPage = () => {
  return (
    <Container>
      <Button to="/categories">Categories</Button>
      <Button to="/products">Products</Button>
    </Container>
  )
}