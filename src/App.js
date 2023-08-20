
import './App.css';
import { useState } from 'react';
function App() {
  const [age,setAge]= useState(0);
  const students=[
    { Name : "Vitthal",Age : 25,IsSamePerson:true},
    { Name : "Shubham",Age : 26,IsSamePerson:true},
    { Name : "Akshay",Age : 28,IsSamePerson: true },

  ]

  function ClickFunc()
  {

    setAge(age+1);
  }

  return (
   
    <div className="App">
      {
      students.map((user,key)=>{
         if(user.IsSamePerson){
          return <MyComponent Name={user.Name} Age={user.Age}  />;
        }
       
      })
      }
      <p>{age}</p>
      <button onClick={ ClickFunc }>Click</button>
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
