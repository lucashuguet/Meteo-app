import React from "react";

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.componentDidMount}>
                <input type="text" name="city" placeholder="Ville..."></input>
                <button>Valider</button>
            </form>
        );
    }
};

export default Form;