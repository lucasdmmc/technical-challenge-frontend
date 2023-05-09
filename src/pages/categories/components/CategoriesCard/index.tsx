/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Container, Header } from "./styles"
// @ts-ignore
import { useCategories } from "../../../../hooks/useCategories"
import { EditCategory } from "../EditCategory";

export interface Category {
  id: number;
  name?: string;
}

export const CategoriesCard = () => {
  const { categories, deleteCategory } = useCategories();
  return (
    <>
      {categories.map(category => {
        return (
          <Container key={String(category.id)}>
            <Header>
              <strong>{category.name}</strong>
              <EditCategory category={category}/>
            </Header>
            <Button>
              <button onClick={() => deleteCategory(category)}>Remove</button>
            </Button>

          </Container>
        )
      })}
    </>
  )
}