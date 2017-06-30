import React, {Component} from "react";
import UserLoginSearch from "./common/UserLoginSearch";
import Adder from "./common/Adder";
import Modifier from "./common/Modifier";
import UserTable from "./common/UserTable"

class UserPage extends Component {
	render(){
		
		return (
			<div>
				<UserLoginSearch
				/>
				<Adder
				/>
				<Modifier
				/>
				<UserTable
				/>
			</div>
		)
	}
}

//EXPORT
export default UserPage;