import React from 'react';
import { Message } from 'semantic-ui-react';

export default class ChatItem extends React.Component {
    render() {
        console.log(this.props);
        return (
            <Message>{this.props.text}</Message>
        )
    }
}