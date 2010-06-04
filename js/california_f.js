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

	
	var apikey="34ff39837fe17beaf0502aded9e78a4f";
	
	
	
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key='+apikey+'&per_page=500&date='+year+'-'+month+'-'+date+'&format=json&jsoncallback=?',
		function(data){
			var imagearry=data.photos.photo.sort(function(){
				return Math.random()>0.5?-1:1;
			});
			var imagelist=imagearry.slice(1,21);
			$.each(imagelist, function(i,item){
				var url = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_s.jpg';
				var dest = 'http://www.flickr.com/photos/'+item.owner+'/'+item.id+'/';
				var image = '<a href="'+dest+'" target="_blank"><img src="'+url+'" /></a>';
				
				$('#flickr').append(image);
				$('#loadf').fadeOut('fast',function(){
					$('#flickr').fadeIn('fast');
			});
			});
			

		});

});
