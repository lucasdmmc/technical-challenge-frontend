/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { useCategories } from "@hooks/useCategories"
import { Button, Container, Header } from "@styles/components/CategoryCard"
import { EditCategory } from "./EditCategory";

export interface Category {
  id: number;
  name: string;
}

export const CategoryCard = () => {
  const { categories, deleteCategory } = useCategories();
  return (
    <>
      {categories.map((category: Category) => {
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