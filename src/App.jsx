import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage"
import ProductsPage from "./pages/ProductsPage"
import SelectedProduct from "./pages/SelectedProduct"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/contacts" Component={AboutUsPage} />
            <Route path="/products" Component={ProductsPage} />
            <Route path="/products/:id" Component={SelectedProduct} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}


