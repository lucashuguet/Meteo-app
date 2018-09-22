import React from "react";

import Titles from "./conponents/Titles";
import Form from "./conponents/Form";
import Meteo from "./conponents/Meteo";

//eslint-disable-next-line
const API_KEY = "e7f2a5dbaed3439bbbca71dd640965d3";

class App extends React.Component {
getWeather = async () => {
  const api_call = await fetch('http://api.openweathermap.org/data/2.5/weatherq?=Manchester,uk&appid=${API_KEY}&units=metric');
  const data = await api_call.json();
  console.logs(data);
}
  render(){
    return(
      <div>
          <Titles />
          <Form getWeather={this.getWeather}/>
          <Meteo />
      </div>
    );
  }
};

export default App;