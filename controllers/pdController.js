//from other
var pd=require("../models/pd");

//EXPORT
module.exports={
	//retrieve pd
	index: function(req,res){
		var query;
		if (req.query) {
			query=req.query;
		}
		else {
			query=req.params.id ? {_id:req.params.id} : {};
		}
		pd.find(query)
			.then(function(doc){
				res.json(doc);
			}).catch(function(err){
				res.json(err);
			});
	},
	//creating pd
	create: function(req,res){
		pd.create(req.body).then(function(doc){
			res.json(doc);
		}).catch(function(err){
			res.json(err);
		})
	},
	//update pd
	update: function(req,res){
		pd.update({
			_id: req.params.id
		},
			req.body
		).then(function(doc){
			res.json(doc);
		}).catch(function(err){
			res.json(err);
		})
	},
	//delete pd
	destroy: function(req,res){
		pd.remove({
			_id: req.params.id
		}).then(function(doc){
			res.json(doc);
		}).catch(function(err){
			res.json(err);
		});
	}
};
