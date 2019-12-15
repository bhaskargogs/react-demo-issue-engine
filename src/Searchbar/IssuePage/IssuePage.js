import React from 'react'

const issuePage = (props) => {
    return (
        <div>
            <h1>Description of the bug</h1>
            <div>{props.title}</div>
            <div>{props.description}</div>
        </div>
        );
}

export default issuePage;