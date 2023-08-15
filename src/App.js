
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
      <h2>{props.Name},{props.Age}</h2>
      <h2>{props.Age}</h2>
      <h2>{props.email}</h2>
      <hr />
    </div>
  );
}

export default App;
