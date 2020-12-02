import React from 'react';
import './ListItem.css';
import StarRatings from '../../../node_modules/react-star-ratings/build/star-ratings';

const ItemPage = ({data}) => {
    return(
<div>
    <div className='center container b' style={{maxWidth:'500px'}}>
        <img className ="img ml4 6rem" style ={{height:'90px'}} alt='' src={data.ItemImageURL} ></img>
            <p className='itemDetails'> {`Item Name: ${data.ItemName}`}</p>
            <p className='itemDetails'> {`Item Slot: ${data.ItemSlot}`}</p>
            <p className='itemDetails'>  {`Item Type: ${data.ItemType}`}</p>
            <p className='itemDetails'> {`Item Level: ${data.ItemLevel}`}</p>
            <p className='itemDetails'> {`Cost: ${data.ItemGoldCost}`}</p>
            <p className='itemDetails'> {`Seller: ${data.UserName}`}</p>
            <p className='itemDetails'> {`Seller Rating: ${data.UserRating}`}</p>
            <StarRatings rating={data.UserRating} starRatedColor="yellow" numberOfStart={5} name='rating' />
    </div>
</div>
    );

}

export default ItemPage;