define(function(require){
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');


function getResumePath() {
    return './profile.json';
}


class Profile extends React.Component {
  constructor(props) {
    super(props);
	}

	render() {
    return (
      <div>
        <h1>HyeonSu Seo</h1>
      </div>
    );
	}
}


class App extends React.Component {
  constructor(props) {
    super(props);
	}

	componentDidMount() {
		$.getJSON(getResumePath(), function (data, status) {
		  if (status === "success") {
		   console.log(data);
		  }
		});
  }
	render() {
    return (<Profile />);
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('app')
);


});
