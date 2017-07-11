import React, {Component} from "react";
import UserLoginSearch from "./common/UserLoginSearch";
import Adder from "./common/Adder";
import Modifier from "./common/Modifier";
import UserTable from "./common/UserTable"

//entry(){
	//userprompt = prompt("Please enter your username", "username");
    //if (userprompt != null){
        //alert("GOOD");
    //}
//}

class UserPage extends Component {
	componentDidMount(){
        var entryUser = prompt("ENTER YOUR USERNAME");
        var entryPass = prompt("UNTER YOUR PASSWORD")
    	if (entryUser === null, entryPass === null){
        	location.reload();
    	}
    	else if (entryUser === "", entryPass === ""){
    		location.reload();
    	}
    	else {
    		alert(entryUser+" "+entryPass);
    	}
    }
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