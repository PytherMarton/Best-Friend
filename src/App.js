import "./App.css";
import { useState } from "react";
// import friend from "./friend.jpg";

const App = () => {
  const [data, setData] = useState({});
  const [input, setInput] = useState("");

  const handleFetch = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${input}/images/random`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    setData(data.message);
    setInput(input);
  };

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleFetch();
      
    }
  };

  return (
    <div className="App">
      <h1>Get Inspired! Find your future best friend!</h1>
      {/* <p className="info">{<Info info={input}/>}</p> */}
      {/* <img id="demoObject" src={friend} alt="img-of-dog"/> */}
      <img id="demoObject" src={data} alt="img-of-dog"/>
      <div className="position">
        <input className="field"
          onKeyDown={_handleKeyDown}
          placeholder="Type a dog breed"
          autoCapitalize="none"
          value={input}
          onInput={(e) => setInput(e.target.value.toLowerCase())}
        />
        <button id="foot"><button className="button-os" onClick={handleFetch}>
          Find your dog! :d
        </button></button>
      </div>
    </div>
  );
};

export default App;
