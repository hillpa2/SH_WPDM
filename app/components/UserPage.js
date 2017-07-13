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
        var validUser = ["USER1", "USER2", "USER3", "USER4"];
        var validPass = ["PASS1", "PASS2", "PASS3", "PASS4"];

        const entryUser = prompt("ENTER YOUR USERNAME");
        const entryPass = prompt("UNTER YOUR PASSWORD")
    	if (entryUser === null || entryPass === null){
        	location.reload();
    	}
    	else if (entryUser === "" || entryPass === ""){
    		location.reload();
    	}
    	else {
    		for (var x = 0; x < validUser.length; x++){
    			if (validUser[x]===entryUser && validPass[x]===entryPass) {
    				render();
    			}
    		}
    		location.reload();
    	}
    }
	render(){	
		return (
			<div>
				<Adder
					entryUser={this.entryUser}
				/>
                <UserLoginSearch
                    
                />
				<UserTable
					entryUser={this.entryUser}
				/>
			</div>
		)
	}
}

//EXPORT
export default UserPage;