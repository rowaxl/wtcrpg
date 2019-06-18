import React from 'react';
import { Input } from 'semantic-ui-react';

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        if(!this.state.value) return;
        
        // TODO: when submit, run actions to post
        console.log(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} >
                <Input
                    fluid
                    type='text'
                    icon='chat'
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder='Type and press return, if you want.'
                />
            </form>
        )
    }
}