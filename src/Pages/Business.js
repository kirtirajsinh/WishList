import React, {useEffect, useState} from 'react'
import MapContainer from '../components/MapContainer'
import { fetchGraphQL } from '../helperFunctions';
import { GET_WISHLISTITEMS_BY_CATEGORY } from '../schemas';
const Business = (props) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    useEffect( async () => {
        const wishlistItemsRaw = await fetchGraphQL(GET_WISHLISTITEMS_BY_CATEGORY, {
            categoryName: props.business.category.name
        })
        if (wishlistItemsRaw.data) {
            setWishlistItems(wishlistItemsRaw.data.wishlistItem);
        }
    }, [])
    return (
        <div>
            <MapContainer business={props.business} wishlistItems={wishlistItems} />
        </div>
    )
}

export default Business
