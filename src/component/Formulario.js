import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormularioGasto extends Component{
  // Creacion de los ref para leer los datos del formulario
  nombreGastoRef = React.createRef();
  cantidadGastoRef = React.createRef();

  crearGasto =(e) => {
    //Prevenir el deafult
      e.preventDefault();

    //Crear el objeto con los datos
      const gasto = {
        nombre: this.nombreGastoRef.current.value,
        cantidad: this.cantidadGastoRef.current.value
      }
      
    //Agregarlo y mandarlo por props
      this.props.agregarGasto(gasto);

    // Resetear el formulario (opcional)
      e.currentTarget.reset();

  }
  render(){
    return(
      <form onSubmit ={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
          <label>Nombre gastos</label>
          <input ref = {this.nombreGastoRef} className ="u-full-width" type = "text" placeholder = "Ej. Transporte"/>
        </div>
        <div className = "campo">
          <label>Cantidad</label>
          <input ref ={this.cantidadGastoRef} className ="u-full-width" type = "text" placeholder = "Ej. 300"/>
        </div>
        <button className="button-primary u-full-width" type ="submit">Agregar</button>
      </form>
    )
  }
}

//Uso de los propTypes
FormularioGasto.propTypes = {
  agregarGasto : PropTypes.func.isRequired
}
export default FormularioGasto;