import React, { Component } from "react";
//add react-router stuff here
import API from "../../utils/API"; //api mongo data

//this dosn't use google Maps and dosn't work (yet)
//the big map on the home page
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