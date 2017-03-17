var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
	render: function () {
		return (
			<MainContainer>Assalamualaikum!
				<h1>Github Battle</h1>
				<p className='lead'>Test</p>
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'>start!</button>
				</Link>
			</MainContainer>
		)
	}
});

module.exports = Home;
