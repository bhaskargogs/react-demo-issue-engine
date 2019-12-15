import React from 'react';
import { withRouter } from 'react-router-dom';
import issues from '../Issues/issues';


class Searchbar extends React.Component {
    state = {
        initialIssues: issues,
        issues: []
    };

    filterList = (event) => {
        let issues = this.state.initialIssues;
        issues = issues.filter((issue) => {
            return issue.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ issues: issues });
    }

    handleClick = (issue) => {
        const { history } = this.props;
        history.push(`/issues/${issue.id}`);
    }

    render() {
        return (
            <div>
                <h1>React Demo</h1>
                <h2>Start typing to search issues</h2>
                <form>
                    <input type="text" onChange={this.filterList} />
                </form>
                {this.state.issues.map((issue) => (
                    <div key={issue.id} onClick={() => this.handleClick(issue)}>{issue.title}</div>
                ))}
            </div>
        )
    }
}

export default withRouter(Searchbar);