import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';

export default class TextInput extends React.Component {
    render() {
        return (
            <Form>
                <TextArea placeholder="Let's make some Text Chat" />
            </Form>
        )
    }
}