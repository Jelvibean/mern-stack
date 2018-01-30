
const contentNode = document.getElementById('contents');
const contentNode2 = document.getElementById('contents2');


class IssueFilter extends React.Component{
	render() {
		return (
			<div>This is a place holder for the Issue Filter</div>
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




class IssueTable extends React.Component {
	render(){				//this is the array being looped -- look at the tag on browser.
		const issueRows = this.props.issues.map(issue=> <IssueRow key={issue.id} issue={issue} />)
		// table will grab attribute issues and map or loop through it.
		//creating an issue element  which is a new row.  with 2 attributes.. a key and all the elements in the array
		return (
			<table className="bordered-table">
			    <thead>
			        <tr>
				         <th>Id</th>
				         <th>Status</th>
				         <th>Owner</th>
				         <th>Created</th>
				         <th>Effort</th>
				         <th>Completion Date</th>
				         <th>Title</th>
			        </tr>
			    </thead>
			    <tbody>
			    	{issueRows}
			    </tbody>
			</table>
		)
	}
}

class IssueRow extends React.Component{
	render(){
		const issue = this.props.issue;
		return(
			<tr>
					<td> {issue.id} </td>
					<td> {issue.status} </td>
					<td> {issue.owner} </td>
					<td> {issue.created.toDateString()} </td>
					<td> {issue.effort} </td>
					<td> {issue.completionDate ? issue.completionDate.toDateString(): ''} </td>
					<td> {issue.title} </td>
			</tr>
		)
	}
}





const issues = [
	{
		id: 1,
		status: 'Open',
		owner: 'Emily Henderson',
		created: new Date('2017-12-31'),
		effort: 5,
		completionDate: undefined,
		title: 'Error in console when clicking Add'
	},
	{
		id: 2,
		status: 'Assigned',
		owner: 'Catherine Meltin',
		created: new Date('2016-4-25'),
		effort: 8,
		completionDate: new Date('2005-10-22'),
		title: 'Missing bottom border on panel'
	}
]


class IssueList extends React.Component {
	constructor(){
		super();
		this.state = { issues: [] }; 
		this.createTestIssue = this.createTestIssue.bind(this);
		setTimeout(this.createTestIssue, 2000);
	}

	// initial method
	componentDidMount(){
		this.loadData();
	}

	// method 2 this sets the state line 95 to the array line 70
	loadData(){
		setTimeout(() => {
			this.setState({issues: issues})
		})
	}


	createIssue(newIssue){
		const newIssues = this.state.issues.slice();
		newIssue.id = this.state.issues.length + 1;
		newIssues.push(newIssue);
		this.setState({issues: newIssues});
	}

	createTestIssue(){
		this.createIssue({
			status: 'New',
			owner: 'Pieta',
			created: new Date(),
			title: 'Completion date should be optional',
		});
	}

	render() {
		// now you have state set and you can pass it to the IssueTable
		return (
			<div>
				<h1>Issue Tracker</h1>
				<IssueFilter/>
				<hr/>
				<IssueTable issues={this.state.issues}/>  
				<button onClick={this.createTestIssue}>Add</button> 
				<hr/>
				<IssueAdd/>
			</div>	
		);
	}
}

ReactDOM.render(<IssueList/>, contentNode);  //Render the component inside the content node

