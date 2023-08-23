
import './App.css';
import { useState } from 'react';
function App() {
  const [age,setAge]= useState(0);
  const [Name,setName]= useState("Name");
  const [number,SetNumber]=useState(0);
  const students=[
    { Name : "Vitthal",Age : 25,IsSamePerson:true},
    { Name : "Shubham",Age : 26,IsSamePerson:true},
    { Name : "Akshay",Age : 28,IsSamePerson: true },

  ]

  function ClickFunc()
  {
    setAge(age+1);
  }

  function ChangeName()
  {
    setName('Vitthal');
  }

    function PlusTen()
    {
      SetNumber(number+10)
    }
    function MinusTen()
    {
      SetNumber(number-10)
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
      <p>User Age : {age}</p>
      <p>User Name : {Name}</p>
      <p> Number  Value : { number }</p>
      <button onClick={ ClickFunc }>Click</button>
      <button onClick={ ChangeName }>Get Name</button>
      <button onClick={ PlusTen }>+10</button>
      <button onClick={ MinusTen }>-10</button>
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
