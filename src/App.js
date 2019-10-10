import React, {useState, useEffect} from "react";
import axios from "axios";
import Display from "./components/Display";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  

    const [apod, setApod] = useState();
    const [date] = useState("2019-10-09");

    const api = "ge4i76QGPZ4948eDNA46uab44ri3oH0mMeHBaKOZ";

    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}&date=${date}`)
      .then(res => {
        setApod({...res.data});
      }).catch(error => console.log(`Error: ${error}`));
    }, []);


  return (
    <div className="App">
      {apod && <Display {...apod}/>} 
    </div>
  );
}

export default App;
