import React from "react";

class Meteo extends React.Component {
constructor (props) {
    super(props)
    this.state = {
        isLoaded: false,
        main: []
        
    }
    this.componentDidMount()
}

componentDidMount() {

fetch("http://api.openweathermap.org/data/2.5/weather?q=Toulouse&lang=fr&appid=e7f2a5dbaed3439bbbca71dd640965d3&units=metric")
 .then(res => res.json())
 .then((result) => {
     this.setState({
        isLoaded: true,
        main: result.main
     });
 })
    
}
 
    render(){
        const { isLoaded, main } = this.state;
            return(
                <div>
                    <p>La température est de {main.temp} </p>
                </div>
            );
    }
};

export default Meteo;