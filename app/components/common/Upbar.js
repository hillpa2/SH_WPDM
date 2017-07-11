import React from "react";
import { Link } from "react-router";

//handleButtonClick(){
	//alert("TEST")
//}

const Upbar = () => (
	<div className="UP_INT">
		<div className="UP_NAME">SH_WPDM v0.11</div>
		<div className="UP_APC">
          	<Link to="/">Home </Link>
        	<Link to="/UserPage"> UserPage</Link>
		</div>
	</div>
);

export default Upbar;