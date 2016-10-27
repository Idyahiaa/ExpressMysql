$(function () {
	$("form").form({
		nom:{
			 identifier:'nom',
			 rules:[ {type:'empty',prompt:'attention champ vide'}]
			},
		prix:{
			 identifier:'prix',
			 rules:[{type:'empty',prompt:'attention champ vide'}, {type:'number',prompt:'Svp enter un nombre'}]
			},
		stock:{
			 identifier:'stock',
			 rules:[{type:'empty',prompt:'attention champ vide'}, {type:'integer',prompt:'Svp enter un entier'}]
			}

	});
});