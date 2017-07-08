import React, {Component} from "react";
import GoogleMapOrig from "./common/GoogleMap";
import Conn from "./common/Conn";
import HomeTable from "./common/HomeTable";
//import API from "../utils/API";

class Home extends Component {
	//getpd() {
    	//API.getpd().then((res) => {
    		//this.setState({ pd: res.data });
    	//});
	//}
	render(){
		
		return (
			<div>
				<GoogleMapOrig
				/>
				<Conn
				/>
				<HomeTable
				/>
			</div>
		)
	}
}

//EXPORT
export default Home;