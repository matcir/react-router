import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/Homepage"
import AboutUsPage from "./pages/AboutusPage"
import ProductsPage from "./pages/ProductsPage"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/contacts" Component={AboutUsPage} />
            <Route path="/products" Component={ProductsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}


