import React from 'react';
import './Profile.css'
import Empty from '../../resources/EmptyStar.png'
import Full from '../../../src/resources/FullStar.png'
import StarRatings from '../../../node_modules/react-rating';

const Profile = ({data}) => {
    return(
<div>
        <div className='center mw6 ma2' style={{display:'flex',justifyContent:'center', marginTop: 50}}>
            <h2>Your Profile</h2>
        </div>

        <div className='profileInfo b white' style={{maxWidth:'500px'}}>
            <p> {`Username: ${data.UserName}`}</p>
            <p> {`UserFaction: ${data.UserFaction}`}</p>
            <p> {`UserServer: ${data.UserServer}`}</p>
            <p> {`Your Rating: ${data.UserRating}`} <StarRatings emptySymbol={<img src={Empty} style={{width:"45px"}} alt=""/>} fullSymbol={<img src={Full} style={{width:"45px"}} alt=""/>} initialRating={data.UserRating} quiet={true} readonly={true}/></p>
            <p className="grow pointer"> {`Active Buy Orders`}</p>
            <p className="grow pointer"> {`Active Sell Orders`}</p>
            <p className="grow pointer"> {`UserCompletedTransactions: ${data.UserCompletedTransactions}`}</p>
            
        </div>
        </div>
    );

}

export default Profile;