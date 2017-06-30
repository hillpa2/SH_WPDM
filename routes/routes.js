//from node
var express = require("express");
var path = require("path");
//from other
var apiRoutes = require("./apiRoutes");
var router = new express.Router();

//from apiRoutes for /api
router.use("/api", apiRoutes);

//if
router.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports=router; //EXPORT