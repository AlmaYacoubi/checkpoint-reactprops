import React from 'react';
import PropTypes from "prop-types";


function Profile({fullName,bio,profession,children}){

    const handleClick =() =>{
        
   alert(fullName)
    }
    return(
    

        <div>
            <h1> {fullName}  </h1>
            <h2> {bio}  </h2>
            <h3> {profession}  </h3>
            {children} 
            
            <button onClick={handleClick}> click me </button>
            <br/>
        </div>
         
    )
}
export default Profile
Profile.defaultProps =
{
    fullName:"Alma Yacoubi", 
    bio:"hello world" ,
    profession:"student"
};