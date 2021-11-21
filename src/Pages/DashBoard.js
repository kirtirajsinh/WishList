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

    const handleOnclick = (e) => {
        e.preventDefault()
        {}
        console.log("clicked")
    }
    
    return (
        <div>
                <Nav />
            <h2 className="text-2xl my-2">DashBoard</h2>
            <div className=" flex flex-row  space-x-5 mx-12 mt-7 ">
                <div className="border border-black w-1/3" >
                    <h3 className="text-xl">WishList</h3>
                    <div className="w-max h-1/2 mx-2 content-between">
                    {offers.map((offer, index) => {
                            return(
                                <div key={index} className=" m-4 block p-6 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                                   <p>Name: {offer.wishlistItem.customer.username}<br />Item:{offer.wishlistItem.item}<br /> Price:{offer.price}<br />latitude: {offer.wishlistItem.lat}, Longitude:{offer.wishlistItem.lng} </p>
                                   <div className="space-x-1">
                                        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={handleOnclick}>Accept </button>
                                        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">Decline </button>
                                 </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
                <div className="border border-black w-1/3">
                    <h3 className="text-xl">Declined Offers</h3>
                    <div className="w-max h-1/2 mx-2 content-between">
                    {offers.map((offer, index) => {
                        if(!offers.accepted){
                            return(
                                <div key={index} className=" m-4 block p-6 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                                   <p>Name: {offer.wishlistItem.customer.username}<br />Item:{offer.wishlistItem.item}<br /> Price:{offer.price}<br />latitude: {offer.wishlistItem.lat}, Longitude:{offer.wishlistItem.lng} </p>
                                </div>
                            )
                        }
                        })}
                        
                    </div>
                       
                        
                    
                    </div>
                <div className="border border-black w-1/3">
                    <h3 className="text-xl">Accepted Offers</h3>
                    <div className="w-max h-1/2 mx-2 content-between">
                    {offers.map((offer, index) => {
                        if(offers.accepted){
                            return(
                                <div key={index} className=" m-4 block p-6 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                                   <p>Name: {offer.wishlistItem.customer.username}<br />Item:{offer.wishlistItem.item}<br /> Price:{offer.price}<br />latitude: {offer.wishlistItem.lat}, Longitude:{offer.wishlistItem.lng} </p>
                                   <div className="space-x-1">
                                        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded" onClick={handleOnclick}>Accept </button>
                                        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">Decline </button>
                                 </div>
                                </div>
                            )
                        }
                        })}
                        
                    </div>

                    </div>
            </div>
        </div>
    )
}

export default DashBoard
