import React from 'react';
import './assets/css/App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import NuestrosAutos from './components/NuestrosAutos';
import DetalleAuto from './components/DetalleAuto';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/nuestros-autos" component={NuestrosAutos}></Route>
        <Route path="/nuestros-autos/:clave" component={NuestrosAutos}></Route>
        <Route exact path="/contacto">
            <Contacto></Contacto>
        </Route>
        <Route exact path="/detalle/:id" component={DetalleAuto}/>
    </Switch>
    </div>
  );
}

export default App;
