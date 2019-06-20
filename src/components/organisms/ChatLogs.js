import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ChatItem from 'components/molecules/ChatItem';

class ChatLogs extends React.Component {
    renderMessages = () => {
        const messages = this.props.messages;

        messages.sort((a, b) => a.created - b.created);

        return messages.map(message =>
            <ChatItem key={message.id} message={message} />
        );
    }

    render() {
        return (
            <Segment inverted style={{overflow: 'auto', height: '50vh'}}>
                {this.renderMessages()}
            </Segment>
        );
    };
}

const mapStateToProps = state => {
    return { messages: state.messages };
};

export default connect(mapStateToProps)(ChatLogs);