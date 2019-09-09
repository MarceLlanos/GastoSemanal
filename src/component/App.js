import React from 'react';
import Header from './Header';
import Formulario from './Formulario';
import '../css/App.css';

function App() {
  return (
		<div className = "App container">
			<Header title = "Gasto semanal"/>
			<div className ="contenido-principal contenido">
				<div className = "row">
					<div className ="one-half column">
						<Formulario/>
					</div>
					<div className ="one-half column"></div>
				</div>
			</div>
		</div>
  );
}

export default App;
