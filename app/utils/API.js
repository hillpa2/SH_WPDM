import axios from "axios";

const API={
	//gets all
	getpd: function(){
		return axios.get("/api/pd");
	},

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
	
	deletepd: function(id){
		return axios.delete(`/api/pd/${id}`);
	},

	//add more here
};

export default API;