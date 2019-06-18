import React from 'react';
import { Segment } from 'semantic-ui-react';
import ChatItem from '../atoms/ChatItem';

export default class ChatLogs extends React.Component {
    renderMessages = () => {
        const sample = [
            {id:1, user:{name:'Jhon', icon:''}, text:'Text01', created:123},
            {id:2, user:{name:'Wren', icon:''}, text:'Text02', created:124},
            {id:3, user:{name:'Root', icon:''}, text:'Text03', created:125},
            {id:4, user:{name:'Show', icon:''}, text:'Text04', created:126}
        ];

        sample.sort((a, b) => a.created - b.created);

        return sample.map(message =>
            <ChatItem key={message.id} text={message.text} />
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