import React from 'react';
import { Button } from 'semantic-ui-react';

export default class PositiveButton extends React.Component {
    render() {
        return (
            <Button primary>
                {this.props.text}
            </Button>
        )
    }
}