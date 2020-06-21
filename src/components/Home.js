import React, { Component } from "react";
import "../assets/css/Home.css";
import Navigation from "./shared/Navigation";
import Auto from "./Auto";
import autosJson from "../data/autos.json";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      autosJson,
    };
  }
  render() {
    const autos = this.state.autosJson.map((auto, i) => {
        if (auto.destacado === "Y") {
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
            return null
        }
    });
    return (
      <div>
        <Navigation></Navigation>
        <div className="container-fluid">
          <div className="titulo">A TODO MOTOR AUTOS</div>
          <p className="descripcion">
            Publicá sin registrarte y en un sólo paso. ¿Apurado por vender?
            Recibí ofertas en Efectivo de concesionarios registrados. ¡Súper!
          </p>
          <div className="destacados">Destacados</div>
          {console.log("cargar")}
          <div className="row">
              {autos}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
