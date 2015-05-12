$(document).ready(function(){

// 	$.ajax({
//   		headers: { 'X-Auth-Token': 'd00751cc49e845b18e9185d72e7a7713' },
//  		 url: 'http://api.football-data.org/alpha/fixtures',
//  		 dataType: 'json',
//  		 type: 'GET',
// 	}).done(function(response) {console.log(response);  
// }); 	

	$.ajax({
		url:'http://api.football-data.org/alpha/fixtures?api=d00751cc49e845b18e9185d72e7a7713',
		dataType:'json',
		success:function(data){
			console.log(data);
		}
	});

}); 