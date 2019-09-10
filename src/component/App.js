import React, {Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../helpers';
import ControlPresupuesto from './ControlPresupuesto';
import Restante from './Restante';
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
