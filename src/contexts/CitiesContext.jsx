import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const CitiesProvider = ({children}) => {
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
    <CitiesContext.Provider value={{
        cities,
        isLoading
    }}>
        {children}
    </CitiesContext.Provider>
  );
}
const useCities = () => {
    const context = useContext(CitiesContext);
    return context;
}
export {CitiesProvider, useCities};