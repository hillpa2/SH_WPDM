//from node
import React from "react";
import Upbar from "./common/Upbar";

const Main = props => (
	<div>
		<Upbar />
		{props.children}
	</div>
);

//EXPORT
export default Main;