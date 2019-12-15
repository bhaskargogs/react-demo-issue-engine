import React from 'react';
import issues from '../../Issues/issues';
import { Link } from 'react-router-dom';
import { Container, Media, Button } from 'react-bootstrap';
import './IssuePage.scss';

export const IssuePage = ({ match }) => {
    const issue = issues.find(item => item.id.toString() === match.params.id);
    return (
        <Container>
            <h1>Description of the bug</h1>
            <h2>{issue.title}</h2>
            <ul className="list-unstyled description-box">
                {issue.description.map((description, index) => (
                    <Media as="li" className="description-text" key={index}>{description.replace(/ /g, "\u00a0")}</Media>
                ))}
            </ul>
            <Link to="/"><Button className="back-link">Go Back</Button></Link> 
        </Container>
    );
}
