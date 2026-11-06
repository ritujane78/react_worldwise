import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route index element = { <Homepage />} />
          <Route path = "/" element = {<Homepage />} />
          <Route path = "/product" element = {<Product />} />
          <Route path = "/pricing" element = {<Pricing />} />
          <Route path = "/app" element = {<AppLayout />} >
            <Route index element = { <CityList />} />
            <Route path = "cities" element = {<CityList />} />
            <Route path='countries' element = {<p>List of countries</p>} />
          </Route>
          <Route path = "/login" element = {<Login />} />
          <Route path = "*" element = {<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
