import { AddCategory } from "./components/AddCategory";
import { CategoriesCard } from "./components/CategoriesCard";
import { Container, Wrapper } from "./styles";

export const Categories = () => {

  return (
    <Container>
      <header>
        <h1>Categories</h1>
      </header>
      <Wrapper>
        <CategoriesCard />
        <AddCategory />
      </Wrapper>

    </Container>
  )
}
