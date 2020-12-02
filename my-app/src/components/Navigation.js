import React from 'react';

const Navigation = ({onRouteChange, isSignedIn, data}) => {

    //const handleSignOut = () => {
    //    isSignedIn = true;
    //}



 if (isSignedIn) {
    return(

        <nav style={{display:'flex', justifyContent:'flex-end', marginTop:'-25px'}}>
            <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer gold'>Home</p>
            <p onClick={() => onRouteChange('profile')} className='f3 link dim black underline pa3 pointer gold'>{`${data.UserName}`}</p>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer gold'>Sign Out</p>
        </nav>
    );
 }
    else {
        return(
    <nav style={{display:'flex', justifyContent:'flex-end', marginTop:'-25px'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer gold'>Sign In</p>
        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer gold'>Register</p>
    </nav>
        );
 }
 
}

export default Navigation;