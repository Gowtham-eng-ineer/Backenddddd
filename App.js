import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [userNames, setUserNames] = useState([]);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handlePost = () => {
    axios.post('http://localhost:5000/register', { Firstname, Lastname, Email,Password })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setPassword("");
          setEmail("");
          setLastname("");
          setFirstname("");
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert(`error: ${error}`);
      });
  }

  const handleGet = () => {
    axios.get('http://localhost:5000/')
      .then((response) => {
        const users = response.data;
        const names = users.map((user) =>user.Firstname);
        setUserNames(names);
      
      })
      .catch((error) => {
        console.error("GET request error:", error);
      });
  }

  return (
    <div className="container">
      <h1>SIGN UP</h1>
      <form>
        <label>FirstName:&nbsp;&nbsp;</label>
        <input
          type="text"
          className="input-field" 
          placeholder="YourName"
          value={Firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br></br>
        <label>LastName:&nbsp;&nbsp;</label>
        <input
          type="text"
          className="input-field" 
          placeholder="YourNickName"
          value={Lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <br></br>
        <label>Email:&nbsp;&nbsp;</label>
        <input
          type="text"
          className="input-field" 
          placeholder="xxxx@gmail.com"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <br></br>
        <label>Password:&nbsp;&nbsp;</label>
        <input
          type="text"
          className="input-field" 
          placeholder="xxxxxx"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        
        <button type="button" onClick={handlePost}>Post</button>
        <button type="button" onClick={handleGet}>Get</button>
      </form>
      <p>Names: {userNames.join(",")}</p>
    </div>
  );
}

export default App;
