import React from 'react';
import { Message } from 'semantic-ui-react';

export default class ChatItem extends React.Component {
    renderTime = () => new Date(this.props.message.created).toLocaleString({ timeZone: 'UTC' });

    render() {
        return (
            <Message className="inverted">
                <Message.Header>{this.props.message.user.name} ({this.renderTime()}) : </Message.Header>
                {this.props.message.text}
            </Message>
        )
    }
}