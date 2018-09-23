import React from "react";

import Titles from "./conponents/Titles";
import Meteo from "./conponents/Meteo";


class App extends React.Component {

  render(){
    return(
      <div>
          <Titles />
          <Meteo />
          
      </div>
    );
  }
};

export default App;