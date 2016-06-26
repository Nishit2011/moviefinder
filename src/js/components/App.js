var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var MovieResults = require('./MovieResults.js');
function getAppState(){
	return{

		//set movies

		movies: AppStore.getMovieResults()
		}

	}

var App = React.createClass({
	getInitialState:function(){
		return getAppState();
		},

	//run adccChange listener

	componentDidMount:function(){
		AppStore.addChangeListener(this._onChange);
		},

		componentWillUnmount:function(){

			AppStore.removeChangeListener(this._onChange);
			},

	render:function(){
		//this will show up the results component only when search is triggered
		if(this.state.movies == ''){
			var movieResults ='';


			}else{

				var movieResults = <MovieResults movies={this.state.movies}/>
				}

		return(

			<div>

			<SearchForm />
			{movieResults}

			</div>

			)

		},

		_onChange:function(){

			//refreshing the state

			this.setState(getAppState());
			}

	});


	module.exports = App;