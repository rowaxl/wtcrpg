import React from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class TextInput extends React.Component {
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
        const text = this.state.value;
        if(!text) return;

        // TODO: this will be DELETED
        const _id = this.props.messages.length + 1;

        this.props.sendMessage({id:_id, user:this.props.user, text, created:Date.now()});
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

// DEV: THIS WILL BE CLEANED
const mapStateToProps = state => {
    return {
        messages: state.messages,
        user: state.user
    };
}

export default connect(mapStateToProps, actions)(TextInput);