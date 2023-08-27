
import './App.css';
import { useState } from 'react';
import Home from './Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
function App() {
  return (
   
    <div className="App">
        <Header/>
        <Footer/>
    </div>
  );
}

const MyComponent = (props)=>{
  return(
    <div>
      <h2>Name : {props.Name}</h2>
      <h2>Age : {props.Age}</h2>
      <h2>Email : {props.email} </h2>
      <hr />
    </div>
  );
}

export default App;
