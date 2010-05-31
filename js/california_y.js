$('#loady').fadeIn('fast',function(){
	$('#yupoo').empty();

	var d = new Date();
	var date= d.getDate();
	if (date < 10)
		date = "0"+date;

	var month = d.getMonth()+1;
	if (month < 10)
		month = "0"+month;

	var year=d.getFullYear()-1;

	var page = (Math.floor(Math.random()*10))+1;

	$.ajax({
	   type: "GET",
	   url: "http://www.yupoo.com/api/rest/?",
	   dataType: "xml",	
	   data: "method=yupoo.interestingness.getList&" +
			"api_key=bdda85402c863453487c2a7a61a709fd&" +
			"per_page=20",

   success:function(msg){$(msg).find('photo').each(function(){
	var id     = $(this).attr('id');
	var owner  = $(this).attr('owner');
	var ownername   = $(this).attr('ownername');
	var title = $(this).attr('title');
	var bucket = $(this).attr('bucket');
	var key = $(this).attr('key');
	var host = $(this).attr('host');
	var dir = $(this).attr('dir');
	var filename = $(this).attr('filename');
	var url    = "http://photo" +host+ ".yupoo.com/" +dir+ "/" +filename+ "/square/";
	var dest   = "http://www.yupoo.com/photos/"+ownername+"/"+id+"/";
	var image  = '<a href="'+dest+'" target="_blank"><img src="'+url+'" /></a>';	
	$('#yupoo').append(image);
	$('#loady').fadeOut('fast',function(){
		$('#yupoo').fadeIn('fast');
	});
   });
   },
   error:function(){
	$('#yupoo').html('<p>Error in connection, Please check your internet connection</p>');
	$('#loady').fadeOut('fast',function(){
		$('#yupoo').fadeIn('fast');
	});
   }
 });
});