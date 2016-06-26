var AppActions = require('../actions/AppActions');

module.exports ={
	searchMovies : function(movie){
//will do our ajax call here

$.ajax({
	url:'http://www.omdbapi.com/?s='+movie.title,
	dataType:'json',
	cache:false,
	success:function(data){
		AppActions.receiveMovieResults(data.Search)
		}.bind(this),
		error:function(xhe,status,err){
			alert(err);
			}.bind(this)

	});

		}
	}