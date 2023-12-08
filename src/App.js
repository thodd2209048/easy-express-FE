import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const options = {
    method: "GET",
    url: "https://trackingmore.p.rapidapi.com/packages/v2/track",
    params: {
      trackingNumber: "NY323068698GB",
    },
    headers: {
      "X-RapidAPI-Key": "1b6afe3b42msh3975d375cc4b132p1680c7jsn539a556d98ea",
      "X-RapidAPI-Host": "trackingmore.p.rapidapi.com",
    },
  };

  const fetchAPI = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
