$('#loady').fadeIn('fast',function(){
	$('#yupoo').empty();
/*
	var d = new Date();
	var date= d.getDate();
	if (date < 10)
		date = "0"+date;

	var month = d.getMonth()+1;
	if (month < 10)
		month = "0"+month;

	var year=d.getFullYear()-1;
*/
	var apikey="bdda85402c863453487c2a7a61a709fd";

	$.getJSON('http://www.yupoo.com/api/rest/?method=yupoo.interestingness.getList&api_key='+apikey+'&per_page=500&format=json&jsoncallback=?',
		function(data){
			var imagearry=data.result.photos.sort(function(){
				return Math.random()>0.5?-1:1;
			});
			var imagelist=imagearry.slice(1,21);
			
			$.each(imagelist, function(i,item){
				var idarrary = item.id.split("-");
				var photoid = idarrary[1];
				var url = 'http://photo' +item.host+ '.yupoo.com/' +item.dir+ '/' +item.filename+ '/square/';
				var dest = 'http://www.yupoo.com/photos/'+item.ownername+'/'+item.photoid+'/';
				var image = '<a href="'+dest+'" target="_blank"><img src="'+url+'" /></a>';
				console.log(url);
				$('#yupoo').append(image);
				$('#loady').fadeOut('fast',function(){
					$('#yupoo').fadeIn('fast');
			});
			});


		});
/*
	$.ajax({
	   type: "GET",
	   url: "http://www.yupoo.com/api/rest/?",
	   dataType: "xml",	
	   data: "method=yupoo.interestingness.getList&" +
			"api_key=bdda85402c863453487c2a7a61a709fd&" +
			"per_page=500",

   success:function(msg){$(msg).find('photo').each(function(){
	var id     = $(this).attr('id');
	var owner  = $(this).attr('owner');
	var idarrary = id.split("-");
	var photoid = idarrary[1];
	
	var ownername   = $(this).attr('ownername');
	var title = $(this).attr('title');
	var bucket = $(this).attr('bucket');
	var key = $(this).attr('key');
	var host = $(this).attr('host');
	var dir = $(this).attr('dir');
	var filename = $(this).attr('filename');
	var url    = "http://photo" +host+ ".yupoo.com/" +dir+ "/" +filename+ "/square/";
	var dest   = "http://www.yupoo.com/photos/"+ownername+"/"+photoid+"/";
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
 */
});