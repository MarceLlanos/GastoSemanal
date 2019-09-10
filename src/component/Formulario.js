import React, { Component } from 'react';

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

      console.log(gasto);
    //Agregarlo y mandarlo por props

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
export default FormularioGasto;