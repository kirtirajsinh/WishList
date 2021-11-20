import React from 'react'
import Nav from "../components/Nav"

const DashBoard = () => {
    const data ={
        category:'Groccery',
        items:[
            'Applesx6',
            'Vegetables',
           'Milk',
            'oil'
        ]
    }
    return (
        <div>
            <Nav />
            <h2 className="text-2xl my-2">DashBoard</h2>
            <div className=" flex flex-row  space-x-5 mx-12 mt-7 h-1/2">
                <div className="border border-black h-96  w-1/3" >
                    <h3 className="text-xl">WishList</h3>
                    <div className="border border-black w-max h-1/2 mx-2 content-between">
                        {
                            data.items.join(',')    
                        }
                    </div>
                </div>
                <div className="border border-black w-1/3"><h3 className="text-xl">Orders</h3></div>
                <div className="border border-black w-1/3">
                    <h3 className="text-xl">Completed Orders</h3>
                    </div>
            </div>
        </div>
    )
}

export default DashBoard
