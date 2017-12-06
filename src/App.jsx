
const contentNode = document.getElementById('contents');
const contentNode2 = document.getElementById('contents2');


class IssueFilter extends React.Component{
	render() {
		return (
			<div>This is a place holder for the Issue Filter</div>
		);
	}
}

class IssueTable extends React.Component {
	render(){
		return (
			<div>This is a place holder for a table of Issues</div>
		);
	}
}

class IssueAdd extends React.Component{
	render() {
		return (
			<div>This is a place holder for an Issue Add Entry form</div>
		);
	}
}

class IssueList extends React.Component {
	render() {
		return (
			<div>
				<h1>Issue Tracker</h1>
				<IssueFilter/>
				<hr/>
				<IssueTable/>
				<hr/>
				<IssueAdd/>
			</div>	
		);
	}
}


const testthis = <h1>This shows that native elements like an h1s dont need to be instantiated</h1>;
ReactDOM.render(testthis, contentNode2);   //This is to show that a div or h1 are built in internal React componetns that can be directly instantiated


ReactDOM.render(<IssueList/>, contentNode);  //Render the component inside the content node

