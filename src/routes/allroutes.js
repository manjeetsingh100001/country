import { City } from "../component/city"
import { Country } from "../component/country"
import { Home } from "../component/home"
import { Route, Routes } from "react-router-dom";

function Allroutes(){
    return(
        <>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/add-city" element={<City/>}/>
         <Route path="/add-country" element={<Country/>}/>

         

        </Routes>
        
        </>
    )
} export default Allroutes