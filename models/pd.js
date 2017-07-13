//from node
var mongoose=require("mongoose");
var Schema=mongoose.Schema;
//creating schema
var pdSchema= new Schema({
	username: String,
	goods: String,
	origin: String,
	destination: String,
	originCoord: String,
	destinationCoord: String,
	shippingCost: String,
	shipFreqPWeek: String
});

var pd= mongoose.model("pd", pdSchema);

//EXPORT
module.exports = pd;