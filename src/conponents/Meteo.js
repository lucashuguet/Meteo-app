import React from "react";

class Meteo extends React.Component {
constructor (props) {
    super(props)
    this.state = {
        city: 'Toulouse'
    }
    this.fetchWeather()
}

fetchWeather () {
     fetch('http://samples.openweathermap.org/data/2.5/weather?q=Toulouse,uk&appid=b6907d289e10d714a6e88b30761fae22')  
     .then((res => res.json())
     .then
}
    render(){
        return(
            <div>
                           
            </div>
        );
    }
};

export default Meteo;