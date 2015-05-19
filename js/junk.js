$(document).ready(function(){

// 	$.ajax({
//   		headers: { 'X-Auth-Token': 'd00751cc49e845b18e9185d72e7a7713' },
//  		 url: 'http://api.football-data.org/alpha/fixtures',
//  		 dataType: 'json',
//  		 type: 'GET',
// 	}).done(function(response) {console.log(response);  
// }); 	


{
  "name": "NFL Injuries 2014",
  "description": "Injury Stats From The 2014 Season",
  "keywords": [
    "NFL",   "injuries",
    "football"
    
  },
  ],
	$.ajax({
		url:'injuries.js',
		dataType:'json',
		success:function(data){
			console.log(data);
		}
		
		
	});
	
	$(document).ready(function(){

// 	$.ajax({
//   		headers: { 'X-Auth-Token': 'd00751cc49e845b18e9185d72e7a7713' },
//  		 url: 'http://api.football-data.org/alpha/fixtures',
//  		 dataType: 'json',
//  		 type: 'GET',
// 	}).done(function(response) {console.log(response);  
// }); 	


{
  "name": "Small Sharp Tool",
  "description": "See who has most injured team in the NFL!",
  "keywords": [
    "NFL",   "injuries",
    "football"
    
"website": "https://small-sharp-tool.com/",
  "repository": "https://github.com/desialex...",
  "logo": "https://small-sharp-tool.com/logo.svg",
  "success_url": "/welcome",
  "scripts": {
    "postdeploy": "bundle exec rake bootstrap"
  },