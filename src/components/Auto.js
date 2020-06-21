import React, { Component } from "react";

class Auto extends Component {
  componentDidMount() {}

  render() {
    const imgSrc = "/img/" + this.props.imagen;
    const precio = (this.props.precio === '0') ? "Consultar" : "$ " + new Intl.NumberFormat().format(this.props.precio)
    const autoId = this.props.imagen.replace(".jpg", "");

    return (
      <div>
        <div className="card" style={{ width: "150px", margin: "2px" }}>
          <a href={`/detalle/${autoId}`}>
            <img src={imgSrc} className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
            <p className="card-text">
              <strong>{this.props.marca}</strong>
            </p>
            <p className="card-text">
              {this.props.modelo} - {this.props.anio}
            </p>
            <p className="card-text" style={{ color: "orange" }}>
              {precio}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Auto;
