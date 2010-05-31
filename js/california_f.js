$('#loadf').fadeIn('fast',function(){
	$('#flickr').empty();

	var d = new Date();
	var date= d.getDate();
	if (date < 10)
		date = "0"+date;

	var month = d.getMonth()+1;
	if (month < 10)
		month = "0"+month;

	var year=d.getFullYear()-1;

	var page = (Math.floor(Math.random()*21))+1;

	$.ajax({
	   type: "GET",
	   url: "http://api.flickr.com/services/rest/?",
	   dataType: "xml",	
	   data: "method=flickr.interestingness.getList&" +
			"api_key=34ff39837fe17beaf0502aded9e78a4f&" +
			"per_page=20&"+"page="+page+"&"+
			"date="+year+
			"-"+month+
			"-"+date,

   success:function(msg){$(msg).find('photo').each(function(){
	var id     = $(this).attr('id');
	var owner  = $(this).attr('owner');
	var farm   = $(this).attr('farm');
	var server = $(this).attr('server');
	var secret = $(this).attr('secret');
	var url    = "http://farm" +farm+ ".static.flickr.com/" +server+ "/" +id+ "_" +secret+ "_s.jpg";
	var dest   = "http://www.flickr.com/photos/"+owner+"/"+id+"/";
	var image  = '<a href="'+dest+'" target="_blank"><img src="'+url+'" /></a>';	
	$('#flickr').append(image);
	$('#loadf').fadeOut('fast',function(){
		$('#flickr').fadeIn('fast');
	});
   });
   },
   error:function(){
	$('#flickr').html('<p>Error in connection, Please check your internet connection</p>');
	$('#loadf').fadeOut('fast',function(){
		$('#flickr').fadeIn('fast');
	});
   }
 });
});