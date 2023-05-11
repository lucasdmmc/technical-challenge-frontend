import { Container, Wrapper } from "@styles/pages/Categories";
import { AddCategory } from "@components/AddCategory";
import { CategoryCard } from "@components/CategoryCard";

export const Categories = () => {

  return (
    <Container>
      <header>
        <h1>Categories</h1>
      </header>
      <Wrapper>
        <CategoryCard />
        <AddCategory />
      </Wrapper>

    </Container>
  )
}
