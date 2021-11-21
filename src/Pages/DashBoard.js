import React, {useState, useEffect} from 'react'
import Nav from "../components/Nav"
import { fetchGraphQL } from '../helperFunctions'
import { GET_OFFERS_BY_BUSINESS } from '../schemas'

const DashBoard = () => {
    const [offers, setOffers] = useState([])

    useEffect(async () => {
        const offersRaw = await fetchGraphQL(GET_OFFERS_BY_BUSINESS, {
            businessId: "f0aad200-9d41-4517-887f-751da7eb4ac4"
        })
        // vvvvvv what is inside the "offers" state can be seen in console
        console.log("PRINTED HERE: ",offersRaw.data.business[0].offers)

        // vvvvvv places the object into the "offers" state 
        setOffers(offersRaw.data.business[0].offers)
    }, [])
    
    return (
        <div>
            <Nav />
            <h2 className="text-2xl my-2">DashBoard</h2>
            <div className=" flex flex-row  space-x-5 mx-12 mt-7 h-1/2">
                <div className="border border-black h-96  w-1/3" >
                    <h3 className="text-xl">WishList</h3>
                    <div className="w-max h-1/2 mx-2 content-between">
                    {offers.map((offer, index) => {
                            return(
                                <div key={index} className="flex flex-row my-2 border border-black space-x-2">
                                   <p>{offer.wishlistItem.customer.username}<br />Item:{offer.wishlistItem.item}<br /> Price:{offer.price}<br />latitude: {offer.wishlistItem.lat}, Longitude:{offer.wishlistItem.lng} </p>
                                </div>
                            )
                        })}
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
