import { useState } from "react";
import "./App.css"; // Import CSS file

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() === "") {
      setGreeting("Please enter a valid name.");
    } else {
      setGreeting(`Hello, ${name}!`);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleInputChange}
          className="input"
        />
        <button onClick={handleSubmit} className="button">Submit</button>
        {greeting && <p className="greeting">{greeting}</p>}
      </div>
    </div>
  );
}

export default App;
