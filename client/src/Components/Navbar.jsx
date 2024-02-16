import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    

    return (
        <nav className="z-50">
            <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
                {/* <div className="flex itels-center flex-1">
                    <h2 className="text-3xl font-bold text-pink-500">Beauty</h2>
                </div> */}
                <div>
                    <ul className="flex gap-4 mr-16 text-[18]">
                    <Link to='/'><li>Logo</li></Link>
                    <Link to='/FoodBeverages'><li>food&beverages</li></Link>
                    <Link to='/HomeIndustrail'><li>home&industrail</li></Link>
                    <Link to='/HealthBeauty'><li>health&beauty</li></Link>
                    <Link to='/Recycling'><li>recycling</li></Link>
                    <Link to='/ServicesResources'><li>services&resources</li></Link>
                    <Link to='/Search'><li>search</li></Link>
                    <Link to='/News'><li>news</li></Link>
                    <Link to='/SellYourThings'><li>sell your things</li></Link>
                    <Link to='/Login'><li>login |</li></Link>
                    <Link to='/Signup'><li>signup</li></Link>
                    <Link to='/Cart'><li>cart</li></Link>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;