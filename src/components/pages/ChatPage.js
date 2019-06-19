import React from 'react';
import { Header } from 'semantic-ui-react';
import MainContents from 'components/templates/MainContents';
import ChatLogs from 'components/organisms/ChatLogs';
import TextInput from 'components/atoms/TextInput';


export default class ChatPage extends React.Component {
    render() {
        return (
            <MainContents>
                <Header as='h2'>ChatPage</Header>
                <ChatLogs />
                <TextInput />
            </MainContents>
        );
    };
}