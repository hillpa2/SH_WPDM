//from node
import React from "react";
import {Route, IndexRoute, Router, browserHistory} from "react-router";
//from other
import Main from "../components/Main";
import UserPage from "../components/UserPage";
import Home from "../components/Home";

//routing
const routes=(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
		<Route path="UserPage" component={UserPage} />
		<IndexRoute component={Home} />
		</Route>
	</Router>
);

//EXPORT
export default routes;