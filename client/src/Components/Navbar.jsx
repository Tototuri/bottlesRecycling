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
                    <Link to='/Home'><li>Logo</li></Link>
                    <Link to='/Food'><li>food&beverages</li></Link>
                    <Link to='/home&industrail'><li>home&industrail</li></Link>
                    <Link to='/health&beauty'><li>health&beauty</li></Link>
                    <Link to='/recycling'><li>recycling</li></Link>
                    <Link to='/services&resources'><li>services&resources</li></Link>
                    <Link to='/search'><li>search</li></Link>
                    <Link to='/news'><li>news</li></Link>
                    <Link to='/sell your things'><li>sell your things</li></Link>
                    <Link to='/login |'><li>login |</li></Link>
                    <Link to='/signup'><li>signup</li></Link>
                    <Link to='/cart'><li>cart</li></Link>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;