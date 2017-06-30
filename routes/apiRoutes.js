//from node
var express=require("express");
//from other
var pdController=require("../controllers/pdController");
var router=new express.Router();

//getting and posting stuff from quotesController
router.get("/pd/:id?", pdController.index);
router.post("/pd", pdController.create);
router.patch("/pd/:id", pdController.update); //update
router.delete("/pd/:id", pdController.destroy);

module.exports=router; //EXPORT