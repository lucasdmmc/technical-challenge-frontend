import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/default'
import { AppRoutes } from './routes/app.routes'
import { CategoriesContextProvider } from './contexts/CategoriesContext'
import { ProductsContextProvider } from './contexts/ProductsContext'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CategoriesContextProvider>
          <ProductsContextProvider>
            <AppRoutes />
          </ProductsContextProvider>
        </CategoriesContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}