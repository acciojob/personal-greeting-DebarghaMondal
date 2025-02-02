import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
      <input 
        type="text" 
        id="name" 
        onChange={e => setText(e.target.value)} 
      />
     <p>{text && text.length>0?"Hello "+ text+"!":""}</p>
    </div>
  );
}

export default App;
