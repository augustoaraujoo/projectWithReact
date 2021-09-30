import "./App.css";
import { useState } from "react";
import Axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  // const displayInfo = () =>{
  //   console.log(Name,Age,Country,Position,Wage);
  // }
  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(()=>{
      console.log("sucess view response");
    });
  };
  return (
    <div className="App">
      <div className="container">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (year):</label>
        <input
          type="text"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button className="buttonAddContainer" onClick={addEmployee}>
          ADD
        </button>
        <div>
          <button>Show Employees</button>
        </div>
      </div>
    </div>
  );
}

export default App;
