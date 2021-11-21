import React, {useEffect, useState} from 'react'
import MapContainer from '../components/MapContainer'
import { fetchGraphQL } from '../helperFunctions';
import { CREATE_OFFER, GET_WISHLISTITEMS_BY_CATEGORY } from '../schemas';
import Nav from '../components/Nav';

const Business = (props) => {
    const [price, setPrice] = useState(0);
    const [deliveryDate, setDeliveryDate] = useState('');
    const [wishlistItems, setWishlistItems] = useState([]);
    const [selectedWishlistItem, setSelectedWishlistItem] = useState(null);
    useEffect( async () => {
        const wishlistItemsRaw = await fetchGraphQL(GET_WISHLISTITEMS_BY_CATEGORY, {
            categoryName: props.business.category.name
        })
        if (wishlistItemsRaw.data) {
            setWishlistItems(wishlistItemsRaw.data.wishlistItem);
        }
    }, [])
    if(!wishlistItems.length) {
        return <Nav><div>Loading...</div></Nav>
    }
    // provided two sets of coordinates on a grid find the hypotenuse

    const getHypotenuse = (x1, y1, x2, y2) => {
        const hypotenuse = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const km = hypotenuse * 110.57
        return Math.round(km * 10) / 10;
    }
    const SelectedItemInfo = () => {
        if(!selectedWishlistItem) {
            return (
                <div>Select a wishlist item to see more info</div>
            )
        }
        return (
            <>
                <h2 style={{fontSize: '20px',  marginBottom: '10px'}}>{selectedWishlistItem.customer.username}</h2>
                <div><strong>Distance: </strong> {getHypotenuse(selectedWishlistItem.lat,selectedWishlistItem.lng,props.business.lat,props.business.lng)}km</div>
                <div><strong>Request: </strong> {selectedWishlistItem.request}</div>
            </>
        )
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const createOfferRaw = await fetchGraphQL(CREATE_OFFER, {
            "businessId": props.business.id,
            "deliveryDate": deliveryDate,
            "price": price,
            "wishlistitemId": selectedWishlistItem.id
        })
        console.log(createOfferRaw);
        if(createOfferRaw.data) {
            setSelectedWishlistItem(null)
        }
    }
    return (
        <>
            <Nav />

        <div className="businessWrapper">
            <div className="businessContainer">
                <div className="mapWrapper">
                    <MapContainer business={props.business} wishlistItems={wishlistItems} setSelectedWishlistItem={setSelectedWishlistItem} />
                </div>
                <div className="selectedInfoContainer">
                    <SelectedItemInfo />
                </div>
            </div>
            <div className="formContainer">
                {selectedWishlistItem ? (<>
                    <h1 style={{fontSize:"20px", marginBottom: '10px'}}>Make {selectedWishlistItem.customer.username} an offer</h1>
                    <div>
                        <label htmlFor="price">Price USD:</label>
                        <input type="number" id="price" onChange={(e) => setPrice(e.target.value)} value={price} placeholder="userName" className=" mb-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-2"/>
                    </div>
                    <div>
                        <label htmlFor="date">Delivery date:</label>
                        <input type="date" id="date" onChange={(e) => setDeliveryDate(e.target.value)} value={deliveryDate} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mx-2"/>
                    </div>
                    <button onClick={(e) => onSubmit(e)} className="submitButton" type="submit">Submit offer</button>
                </>): null}

            </div>
        </div>
        </>
    )
}

export default Business
