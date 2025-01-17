import './App.css';
import React from "react";

import mailImage from "./mailIcon.png";


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <title>Email Sender</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>

        
        <img src={mailImage} alt="this project was a bad idea" class = "center"/>
        <h1>Email Sender</h1>
        <p>  
          An application used to send emails made by Christina Le for ICS4U
        </p>

        <label for="fname">Recipient Email Address:</label>
        <input type="text" id="fname" name="fname"></input> <br></br>

        <label for="fname">Message:</label><br></br>
        <textarea></textarea><br></br>

        <button class = "center">
          Send
        </button>
      </header>
      <footer>
        <br></br>
      </footer>
    </div>
  );
}

export default App;
