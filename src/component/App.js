import React from 'react';
import Header from './Header';
import '../css/App.css';

function App() {
  return (
		<div className = "App container">
			<Header title = "Gasto semanal"/>
			<div className = "row">
			<div className ="one-half column"></div>
			<div className ="one-half column"></div>
		</div>
		</div>
  );
}

export default App;
