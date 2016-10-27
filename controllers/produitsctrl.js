var mysql = require('mysql');
var dateformat= require('dateformat');


module.exports = {

	index:function  (req,res,next) {
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		var produits=null;
		db.query("select * from produits" ,function (err,rows,fields) {
			if(err){
				console.log(err);
			}
			produits=rows
			db.end();
			res.render('produits/listeproduits',{produits:produits});
		});
		
	},
	nouveau :function(req,res,next){
			res.render('produits/nouveau');
			},
	nvproduit:function(req,res,next){

			var date = new Date();
			var d = dateformat(date,'yyyy-mm-dd');
			var produit={
				nom:req.body.nom,
				prix:req.body.prix,
				stock:req.body.stock,
				date:d
			};
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		db.query('insert into produits SET ?',produit,function(err,	rows,fields){
			if(err){throw err;}
			db.end();
		});
		res.render('produits/nouveau',{ info : 'produit bien ajoute'});
			//console.log(produit);
			//console.log(req.body);
	},
	supprimerProduits:function(req,res,next){

		var id = req.body.id;
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
	
		db.query("delete from produits where id = ?",id,function (err,rows,fields) {
			if(err){throw err; res=false;}
			db.end();
			
		});
	},
	modifierProduirs:function(req,res,next){
		var id = req.params.id;
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		var produit = null;
		db.query('select * From produits where id = ?',id ,function (err,rows,fields) {
			if(err){throw err;}
			produit=rows;
			db.end();
			res.render("produits/modifier",{info:produit});
		});
	},
	updateProd:function(req,res,next){
		var pro={
				nom:req.body.nom,
				prix:req.body.prix,
				stock:req.body.stock
			};
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		db.query("update produits SET ? where ?",[pro,{id : req.body.id_pro}],function (err,rows,fields) {
			if(err){throw err;}
		});
		 
		res.redirect('/list');
	}




}