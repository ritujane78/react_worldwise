import { BrowserRouter, data, Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'
import { useEffect, useState } from 'react'
import CountryList from './components/ContryList'
import City from './components/City'
import Form from './components/Form'

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL = "http://localhost:8000"

  useEffect(() => {
    const fetchCities = async () => {
      try{
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch{
        alert("There was an error loading data")
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route index element = { <Homepage />} />
          <Route path = "/" element = {<Homepage />} />
          <Route path = "/product" element = {<Product />} />
          <Route path = "/pricing" element = {<Pricing />} />
          <Route path = "/app" element = {<AppLayout />} >
            <Route index element = { <Navigate replace to="cities" />} />
            <Route path = "cities" element = {<CityList cities = {cities} isLoading={isLoading}/>} />
            <Route path='cities/:id' element = {<City />} />
            <Route path='form' element = {<Form />} />
            <Route path='countries' element = {<CountryList cities={cities} isLoading={isLoading}/>} />
          </Route>
          <Route path = "/login" element = {<Login />} />
          <Route path = "*" element = {<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
