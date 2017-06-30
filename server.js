//dependecies
var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
//end dependecies

//managing initials
var PORT=process.env.PORT || 8080;
mongoose.Promise=bluebird;
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));
app.use("/", routes);
var db=process.env.MONGODB_URI || "mongodb://localhost/pdApp";
//end managing intitials

//connecting mongoose to database
mongoose.connect(db, function(error) {
	if (error) {
		console.log(error);
	}
	else {
		console.log("MONGOOSE CONNECTION SUCCESSFUL");
	}
});

app.listen(PORT, function(){
	console.log("NOW LISTENING ON PORT 8080")
})