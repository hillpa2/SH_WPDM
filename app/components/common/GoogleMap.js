import React, { Component } from "react";
//add react-router stuff here
import API from "../../utils/API"; //api mongo data

class GoogleMapOrig extends Component {
	render(){
		return (
			<div>
				<div id="mapid"></div>
			</div>
		);
	}
}

export default GoogleMapOrig;