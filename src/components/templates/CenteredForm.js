import React from 'react';
import { Grid } from 'semantic-ui-react';

export default class CenteredForm extends React.Component {
    render() {
        return (
            <Grid className="middle aligned center aligned">
                {this.props.children}
            </Grid>
        );
    }    
}
