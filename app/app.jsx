const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const $ = require('jQuery');

//load foundation
//require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app.css
//require('style-loader!css-loader!sass-loader!applicationStyles');
require('applicationStyles');

ReactDOM.render(
	<p>Boilerplate4</p>,
	document.getElementById('app')
);