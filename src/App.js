
import './App.css';

function App() {
  const students=[
    { Name : "Vitthal",Age : 25,IsSamePerson:true},
    { Name : "Shubham",Age : 26,IsSamePerson:true},
    { Name : "Akshay",Age : 28,IsSamePerson: true },

  ]
  return (
   
    <div className="App">
      {
      students.map((user,key)=>{
         if(user.IsSamePerson){
          return <MyComponent Name={user.Name} Age={user.Age}  />;
        }
       
      })
      }
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
