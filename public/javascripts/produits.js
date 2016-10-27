$(function () {

$("#my-table #btn-supp").click(function(e) {
  if(confirm('are you sue'))
  {		
		e.preventDefault();
		var item = $(this);
		var id= item.parent().parent().find('#id_produit').text();
		//alert(id);

		$.ajax({
			url:'/supp',
			method:'post',
			data:{id:id},
			success:function(res){
				 console.log(res);
			}
		});
		item.parent().parent().remove();
	}
});
	
});
