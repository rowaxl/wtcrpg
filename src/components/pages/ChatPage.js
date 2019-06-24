import React from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import 'components/styles/ChatPage.css';
import MainContents from 'components/templates/MainContents';
import ChatLogs from 'components/organisms/ChatLogs';
import TextInput from 'components/atoms/TextInput';


class ChatPage extends React.Component {
    render() {
        return (
            <MainContents>
                <Header as='h2'>Channel: {this.props.channels.name}</Header>
                <ChatLogs />
                <TextInput />
            </MainContents>
        );
    };
}

const mapStateToProps = state => {
    return { channels: state.channels };
}

export default connect(mapStateToProps)(ChatPage);