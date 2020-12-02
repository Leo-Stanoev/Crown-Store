import React from 'react';
import SellLogo from '../../resources/SellLogo.png'

const SellButton = () => {
    return(

        <div className='center mw6' style={{display:'flex',justifyContent:'center'}}>
            <img alt='' src={SellLogo}></img>
        </div>
    );
}
export default SellButton;