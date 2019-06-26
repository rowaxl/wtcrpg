import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ChatItem from 'components/molecules/ChatItem';

class ChatLogs extends React.Component {
    constructor(props) {
        super(props);
        this.chatLogsRef = React.createRef();
    }

    componentDidUpdate = () => {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        const chatContainer = this.chatLogsRef.current;
        if(!chatContainer) return;
        this.chatLogsRef.current.children[0].scrollTo(0, chatContainer.clientHeight);
    }

    renderMessages = () => {
        const messages = this.props.messages;

        messages.sort((a, b) => a.created - b.created);

        return messages.map(message =>
            <ChatItem key={message.id} message={message} />
        );
    }

    render() {
        return (
            <ChatLogTarget ref={this.chatLogsRef} children={this.renderMessages()} />
        );
    };
}

const ChatLogTarget = React.forwardRef((props, ref) => {
    return (
        <div id="chatLogTarget" ref={ref}>
            <Segment inverted style={{overflow: 'auto', height: '70vh'}}>
                {props.children}
            </Segment>
        </div>
    );
});

const mapStateToProps = state => {
    return { messages: state.messages };
};

export default connect(mapStateToProps)(ChatLogs);