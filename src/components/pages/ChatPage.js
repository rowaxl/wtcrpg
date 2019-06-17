import React from 'react';
import { Header } from 'semantic-ui-react';
import MainContents from '../templates/MainContents';
import ChatLogs from '../organisms/ChatLogs';
import TextInput from '../atoms/TextInput';


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