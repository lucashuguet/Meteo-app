import React from "react";

class Form extends React.Component {
    render(){
        return(
            <div>
                <from onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="Ville..."/>
                    <input type="text" name="country" placeholder="Pays..."/>
                    <button>Météo</button>
                </from>         
            </div>
        );
    }
};

export default Form;