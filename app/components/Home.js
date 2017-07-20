import React, {Component} from "react";
import GoogleMapOrig from "./common/GoogleMap";
import Conn from "./common/Conn";
import HomeTable from "./common/HomeTable";
import UserLoginSearch from "./common/UserLoginSearch";
//import API from "../utils/API";

class Home extends Component {
	render(){
		
		return (
			<div>
				<div className="FULL10">
					<GoogleMapOrig
					/>
					<Conn
					/>
				</div>
				<UserLoginSearch
                />
				<HomeTable
				/>
			</div>
		)
	}
}

//EXPORT
export default Home;