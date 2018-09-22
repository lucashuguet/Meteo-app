import React from "react";

import Titles from "./conponents/Titles";
import Form from "./conponents/Form";
import Meteo from "./conponents/Meteo";

class App extends React.Component {
  render(){
    return(
      <div>
          <Titles />
          <Meteo />
          <Form />
      </div>
    );
  }
};

export default App;