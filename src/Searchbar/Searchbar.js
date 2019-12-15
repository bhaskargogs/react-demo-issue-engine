import React from 'react';
import { withRouter } from 'react-router-dom';
import issues from '../Issues/issues';
import { ListGroup, Container } from 'react-bootstrap';
import './Searchbar.scss';

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
            <Container>
                <h1>React Demo</h1>
                <h2>Start typing to search issues</h2>
                <form>
                    <input type="text" onChange={this.filterList} />
                </form>
                {this.state.issues.map((issue) => (
                    <ListGroup key={issue.id}>
                        <ListGroup.Item className="issue-search" onClick={() => this.handleClick(issue)}>{issue.title}</ListGroup.Item>
                    </ListGroup>
                    // <div key={issue.id} onClick={() => this.handleClick(issue)}>{issue.title}</div>
                ))}
            </Container>
        )
    }
}

export default withRouter(Searchbar);