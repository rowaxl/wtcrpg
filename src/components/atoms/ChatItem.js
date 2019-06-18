import React from 'react';
import { Message } from 'semantic-ui-react';

export default class ChatItem extends React.Component {
    render() {
        return (
            <Message className="inverted">{this.props.text}</Message>
        )
    }
}