import React, {Component} from 'react';
import Header from './Header';
import Formulario from './Formulario';
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
			console.log(gastos);
			console.log(`Se agrego el gato a: ${gasto}`)
		//Agregar el gasto al objeto del state

		//Ponerlo al state

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
						<div className ="one-half column"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
