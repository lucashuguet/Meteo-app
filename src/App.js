import React from "react";

import Titles from "./components/Titles";
import Meteo from "./components/Meteo";


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