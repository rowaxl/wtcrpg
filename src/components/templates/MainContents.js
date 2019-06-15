import React from 'react';
import { Container } from 'semantic-ui-react'

export default class MainContents extends React.Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        );
    }    
}
