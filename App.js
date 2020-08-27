import React from 'react';
import './App.css';
import Profile from './Profile/Profile'

function App() {
  return (
    <div className="element" style={{backgroundColor:"yellow"}}>


      <Profile fullName="Alma Yacoubi" bio="hello world"  profession="student" > 
    <img src="https://img.devrant.com/devrant/rant/r_1973645_LFf2y.jpg"/>
      </Profile>
    
    </div>
  );
}

export default App;
