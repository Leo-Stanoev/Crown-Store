import React from 'react';

const TargetProfile = ({data}) => {
    return(
<div>
        <div className='center mw6 ma2' style={{display:'flex',justifyContent:'center', marginTop: 50}}>
            <h2>Your Profile</h2>
        </div>

        <div className='profileInfo b white' style={{maxWidth:'500px'}}>
            <p> {`Username: ${data.UserName}`}</p>
            <p> {`UserFaction: ${data.UserFaction}`}</p>
            <p> {`UserServer: ${data.UserServer}`}</p>
            <p> {`UserRating: ${data.UserRating}`}</p>
            <p> {`UserCompletedTransactions: ${data.UserCompletedTransactions}`}</p>
            
        </div>

        </div>
    );

}

export default TargetProfile;