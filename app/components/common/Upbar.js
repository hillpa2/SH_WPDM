import React from "react";
import { Link } from "react-router";

//this is the bar on the top shared between home and the UserPage
const Upbar = () => (
	<div className="FULL10 g-y">
		<h1>
		<div className="left b-y">SH_WPDM v0.21</div>
		<div className="right">
          	<Link to="/">Home </Link>
        	<Link to="/UserPage">UserPage</Link>
		</div>
		</h1>
	</div>
);

export default Upbar;