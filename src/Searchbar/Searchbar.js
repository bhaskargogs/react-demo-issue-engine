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

    filterList = (value) => {
        let issues = this.state.initialIssues;
        if (value === '') {
            this.setState({ issues: [] });
        } else {
            issues = issues.filter((issue) => {
                return issue.title.toLowerCase().search(value.toLowerCase()) !== -1;
            });
            this.setState({ issues: issues });
        }

    }

    handleClick = (issue) => {
        const { history } = this.props;
        history.push(`/issues/${issue.id}`);
    }

    render() {
        return (
            <Container>
                <h1>React Demo</h1>
                <h2>Start typing to search Issues!</h2>
                <form>
                    <label for="issue-search" className="sr-only">Issues</label>
                    <input type="text" addLabel={false} id="issue-search" onChange={(event) => this.filterList(event.target.value)} />
                </form>
                {this.state.issues.map((issue) => (
                    <ListGroup key={issue.id}>
                        <ListGroup.Item className="issue-search" onClick={() => this.handleClick(issue)} onChange={(e) => this.filterList(e.target.value)}>{issue.title}</ListGroup.Item>
                    </ListGroup>
                ))}
            </Container>
        )
    }
}

export default withRouter(Searchbar);