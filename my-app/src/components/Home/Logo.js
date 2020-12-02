import React from 'react';
import LogoImage from '../../resources/Logo.png'

const Logo = ({onRouteChange}) => {
        return(
            <div className="grow pointer" onClick={() => onRouteChange('home')}  style={{marginTop: -70, width: "fit-content", marginLeft: "auto", marginRight: "auto"}}>
            <div className='center mw6' style={{display:'flex',justifyContent:'center'}}>
                <img alt='' src={LogoImage}></img>
            </div>
            </div>
        );


}

export default Logo;