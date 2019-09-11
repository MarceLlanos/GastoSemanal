import React, {Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../helpers';
import ControlPresupuesto from './ControlPresupuesto';
import '../css/App.css';

class App extends Component{

	state ={
		presupuesto: '',
		restante: '',
		gastos: {}
	}
	// Agregar un nuevo gasto al state
	agregarGasto = gasto => {
		// Tomar una copia del state actual
			const gastos = {...this.state.gastos};

		//Agregar el gasto al objeto del state
			gastos[`gasto${Date.now()}`] = gasto;

		//Ponerlo al state
		this.setState({gastos});

		// restar al presupuesto
		this.restarPresupuesto(gasto.cantidad);

	}
	// Agregar el component did mount para que se pida el presupuesto
	componentDidMount(){
		this.obtenerPresupuesto();
		
	}
	obtenerPresupuesto =() =>{
		let presupuesto = prompt('Cual es el presupuesto?');
		let resultado = validarPresupuesto(presupuesto);
		if(resultado){
			this.setState({
				presupuesto:presupuesto,
				restante: presupuesto
			});
		}else{
			this.obtenerPresupuesto()
		}
	}
	// Restar del presupuesto cuando un gasto se crea
	restarPresupuesto = cantidad =>{

		//leer el gasto
		let restar = Number(cantidad);

		// Tomar una copia del state actual
		let restante = this.state.restante;

		//lo restamos
		restante -= restar
		// console.log(restante);
		restante =String(restante);

		//agregamos el nuevo state
		this.setState({restante});

	}

	render(){
		return (
			<div className = "App container">
				<Header title = "Gasto semanal"/>
				<div className ="contenido-principal contenido">
					<div className = "row">
						<div className ="one-half column">
							<Formulario
								agregarGasto = {this.agregarGasto}
							/>
						</div>
						<div className ="one-half column">
							<Listado
								gastos = {this.state.gastos}
							/>
							<ControlPresupuesto
								presupuesto = {this.state.presupuesto}
								restante = {this.state.restante}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
