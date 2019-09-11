import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component{
  
  render(){

    const {cantidad, nombre} = this.props.gasto;

    return(
      <li className = "gastos">
        <p>
          {nombre}
          <span className = "gasto">$ {cantidad}</span>
        </p>
      </li>
    );
  }
}
Gasto.propTypes = {
  gasto : PropTypes.object.isRequired
}

export default Gasto;