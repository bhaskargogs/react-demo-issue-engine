import React from 'react';
import IssuePage from './IssuePage/IssuePage';

export class Searchbar extends React.Component {
    state = {
        initialIssues: [],
        issues: []
    };

    filterList = (event) => {
        let issues = this.state.initialIssues;
        issues = issues.filter((issue) => {
            return issue.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ issues: issues });
    }

    componentWillMount = () => {
        this.setState({
            initialIssues: this.props.content
        })
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
                        <IssuePage key={issue.title} description={issue.description} title={issue.title} />
                    ))}
            </div>
        )
    }
}

