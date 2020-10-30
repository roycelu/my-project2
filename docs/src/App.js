import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Stations from './components/Stations';

const App = () => {

  const [text, setText] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const inputOnChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }
  
  const buttonOnClick = (e) => {
    e.preventDefault();
    setSearchWord(text);
    setText("");
  }

  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + "/oslo_city_bike_logo.png"} alt="logo" />
      <h1>Sykkelstasjoner</h1>
      <Search text={text} onChange={inputOnChange} onClick={buttonOnClick} word={searchWord} />
      <Stations word={searchWord} />
      <p>Made with ♥ by Royce Lu</p>
    </div>
  );
}

export default App;
