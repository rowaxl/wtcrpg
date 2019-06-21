import React from 'react';
import { Segment, Message } from 'semantic-ui-react';
import 'components/styles/ChatItem.css';

export default class ChatItem extends React.Component {
    renderTime = () => new Date(this.props.message.created).toLocaleString({ timeZone: 'UTC' });

    render() {
        return (
            <Segment basic>
                <Message className="inverted">
                    <Message.Header>{this.props.message.user.name}</Message.Header>
                    {this.props.message.text}
                </Message>
                <div className="renderedTime">
                    {this.renderTime()}
                </div>
            </Segment>
        )
    }
}