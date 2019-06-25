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
        console.log(chatContainer);
        if(!chatContainer) return;
        this.chatLogsRef.current.scrollTo(0, 10000);
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
            // refs fail. why?
            <ChatLogTarget ref={this.chatLogsRef} children={this.renderMessages()} />
        );
    };
}

const ChatLogTarget = React.forwardRef((props, ref) => {
    return (
        <Segment ref={ref} inverted style={{overflow: 'auto', height: '70vh'}}>
            {props.children}
        </Segment>
    )
})

const mapStateToProps = state => {
    return { messages: state.messages };
};

export default connect(mapStateToProps)(ChatLogs);