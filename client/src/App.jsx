import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./Components/Home";
import FoodBeverages from "./Components/FoodBeverages";
import HomeIndustrail from "./Components/HomeIndustrail";
import HealthBeauty from "./Components/HealthBeauty";
import Recycling from "./Components/Recycling";
import ServicesResources from "./Components/ServicesResources";
import Search from "./Components/Search";
import News from "./Components/News";
import SellYourThings from "./Components/SellYourThings";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Cart from "./Components/Cart";



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element = { <Home/> } />
       <Route path="FoodBeverages" element = { <FoodBeverages/> } />
       <Route path="/HomeIndustrail" element = { <HomeIndustrail/> } />
       <Route path="/HealthBeauty" element = { <HealthBeauty/> } />
       <Route path="/Recycling" element = { <Recycling/> } />
       <Route path="/ServicesResources" element = { <ServicesResources/> } />
       <Route path="/Search" element = { <Search/> } />
       <Route path="/News" element = { <News/> } />
       <Route path="/SellYourThings" element = { <SellYourThings/> } />
       <Route path="/Signup" element = { <Signup/> } />
       <Route path="/Login" element = { <Login/> } />
       <Route path="/Cart" element = { <Cart/> } />
      </Routes>
    </BrowserRouter>
    </>
)
}



export default App