import axios from "axios";

const API={
	//gets all
	getpd: function(){
		return axios.get("/api/pd");
	},

	//saves new pd
	savepd: function(
		username, 
		goods, 
		origin, 
		destination, 
		originCoord, 
		destinationCoord,
		shippingCost,
		shipFreqPWeek
		)
	{
		return axios.post("/api/pd", {
		username, 
		goods, 
		origin, 
		destination, 
		originCoord, 
		destinationCoord,
		shippingCost,
		shipFreqPWeek
		});
	},
	
	//deletes specified pd
	deletepd: function(id){
		return axios.delete(`/api/pd/${id}`);
	},
};

export default API;