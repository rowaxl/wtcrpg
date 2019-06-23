import React from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import MainContents from 'components/templates/MainContents';
import ChatLogs from 'components/organisms/ChatLogs';
import TextInput from 'components/atoms/TextInput';


class ChatPage extends React.Component {
    render() {
        return (
            <MainContents style={{paddingTop: "12px"}}>
                <Header as='h2'>Channel: {this.props.channel.name}</Header>
                <ChatLogs />
                <TextInput />
            </MainContents>
        );
    };
}

const mapStateToProps = state => {
    return { channel: state.channel };
}

export default connect(mapStateToProps)(ChatPage);