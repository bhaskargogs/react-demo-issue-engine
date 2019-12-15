import React from 'react';
import issues from '../../Issues/issues';

export const IssuePage = ({ match }) => {
    const issue = issues.find(item => item.id.toString() === match.params.id);
    console.log(issue.description);
    return (
        <div>
            <h1>Description of the bug</h1>
            <h2>{issue.title}</h2>
            <div>{issue.description.map((item, index) =>
                <div key={index}>{item}</div>
                )}</div>
        </div>
        );
}
