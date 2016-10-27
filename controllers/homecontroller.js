module.exports = {

	index:function  (req,res,next) {
		res.render('index',{title:'Bienvenu a mysql et node '});
	}
}