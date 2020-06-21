import React, { Component } from "react";
import Navigation from "./shared/Navigation";
import Auto from "./Auto";
import autosJson from "../data/autos.json";

class NuestrosAutos extends Component {
  constructor() {
    super();
    this.state = {
      autosJson,
    };
  }
  render() {
    let parametro = "";
    
    this.props.match.params.clave
      ? (parametro = this.props.match.params.clave)
      : (parametro = "");

    const autos = this.state.autosJson.map((auto, i) => {
      if (this.checkInclude(auto.marca,parametro)||this.checkInclude(auto.modelo,parametro)||this.checkInclude(auto.anio,parametro)) {
        
        const autoId = auto.imagen.replace(".jpg", "");
        return (
          <Auto
            key={autoId}
            marca={auto.marca}
            modelo={auto.modelo}
            anio={auto.anio}
            precio={auto.precio}
            imagen={auto.imagen}
          ></Auto>
        );
      } else {
        return null;
      }
    });//cosnt autos
    return (
      <div>
        <Navigation></Navigation>
        <div className="row">{autos}</div>
      </div>
    );
  }

  checkInclude(propiedad, palabra){
    const prop = propiedad.toLowerCase()
    const pal = palabra.toLowerCase()
    if(prop.includes(pal)){
      return true
    } else {
      return false
    }
  }//checkInclude
}//NuestrosAutos

export default NuestrosAutos;
