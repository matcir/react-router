import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/Homepage"
import AboutUsPage from "./pages/AboutusPage"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/contacts" Component={AboutUsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}


