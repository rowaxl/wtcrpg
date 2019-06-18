import React from 'react';
import { Input } from 'semantic-ui-react';

export default class TextInput extends React.Component {

    render() {
        return (
            <div>
                <Input fluid icon='chat' placeholder='Type and press return, if you want.' />
            </div>
        )
    }
}