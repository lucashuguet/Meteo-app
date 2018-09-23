import React from "react";

class Meteo extends React.Component {
constructor (props) {
    super(props)
    this.state = {
        isLoaded: false,
        main: [],
        weather: []
        }
    this.componentDidMount()
}

componentDidMount() {

fetch("http://api.openweathermap.org/data/2.5/weather?q=Toulouse&lang=fr&appid=e7f2a5dbaed3439bbbca71dd640965d3&units=metric")
 .then(res => res.json())
 .then((result) => {
     this.setState({
        isLoaded: true,
        main: result.main,
        weather: result.weather[0]
        
     });
   })
    
}
 
    render(){
        const { isLoaded, main, weather } = this.state;
            return(
                <div>
                    <br></br>
                    <p>La température est de {main.temp}°C </p><br></br>
                    <p>Conditions : {weather.description}</p><br></br>
                    <p>Humidité : {main.humidity}%</p><br></br>
                </div>
            );
    }
};

export default Meteo;