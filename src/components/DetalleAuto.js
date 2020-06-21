import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import autosJson from "../data/autos.json";
import Navigation from "./shared/Navigation";

class DetalleAuto extends Component {
  constructor() {
    super();
    this.state = {
      autosJson,
    };
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack();
  }

  render() {
    const paramId = this.props.match.params.id;
    const auto = autosJson.filter(
      (auto) => auto.imagen.replace(".jpg", "") === paramId
    )[0];
    const precio =
      auto.precio === "0"
        ? "Consultar"
        : "$ " + new Intl.NumberFormat().format(auto.precio);

    const imgSrc = "/img/" + auto.imagen;

    return (
      <div>
        <Navigation></Navigation>
        <Container style={{ marginTop: "10px" }}>
          <Row>
            <Col md={4} style={{ borderRight: "1px solid #cecece" }}>
              <Row>
                <Image className="" variant="top" src={imgSrc} />
              </Row>
              <Row>
                <p className="">
                  Localidad: <br />
                  {auto.localidad}
                </p>
              </Row>
            </Col>

            <Col>
              <div className="">
                <h1>{auto.marca}</h1>
                <h2>{auto.modelo}</h2>
                <h4>Año: {auto.anio}</h4>
                <p>{precio}</p>
                <button onClick={this.goBack}>Volver</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetalleAuto;
