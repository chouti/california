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

	$.getJSON('http://www.yupoo.com/api/rest/?method=yupoo.interestingness.getList&api_key='+apikey+'&per_page=500&format=json&callback=?',
		function(data){
			var imagearry=data.result.photos.sort(function(){
				return Math.random()>0.5?-1:1;
			});
			var imagelist=imagearry.slice(1,21);
			
			$.each(imagelist, function(i,item){
				var idarrary = item.id.split("-");
				var photoid = idarrary[1];
				var url = 'http://photo' +item.host+ '.yupoo.com/' +item.dir+ '/' +item.filename+ '/square/';
				var dest = 'http://www.yupoo.com/photos/'+item.ownername+'/'+photoid+'/';
				var image = '<a href="'+dest+'" target="_blank"><img src="'+url+'" /></a>';
				console.log(dest);
				$('#yupoo').append(image);
				$('#loady').fadeOut('fast',function(){
					$('#yupoo').fadeIn('fast');
			});
			});


		});
});