import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <div className="bg-purple-600">
            <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-row justify-between">
                    <div className="flex space-x-4">
                        <div><Link to="#" className="text-xl text-white font-bold">WishList </Link></div>
                        <div className="hidden md:flex items-center space-x-1">
                        <Link to="/dashboard" className="text-l text-white hover:text-gray-900">DashBoard</Link>
                        <Link to="/business" className="text-l text-white hover:text-gray-900">Business</Link>
                        </div>
                    </div>
                    <div className="items-center space-x-1">
                        <button className="hover:bg-white text-white hover:text-gray-900 transition duration-300">LogOut</button>    
                    </div>    
            </div>
            </div>
            
        </div>
    )
}

export default Nav
