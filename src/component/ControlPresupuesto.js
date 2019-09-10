import React, { Component } from 'react';
import Restante from './Restante';
import Presupuesto from './Presupuesto';

 class ControlPresupuesto extends Component{
   render(){
		return(
			<React.Fragment>
				<Presupuesto
					presupuesto = {this.props.presupuesto}
				/>
				<Restante
					restante = {this.props.restante}
				/>
			</React.Fragment>
		)
   }
 }

 export default ControlPresupuesto;