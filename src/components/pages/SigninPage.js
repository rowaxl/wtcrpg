import React from 'react';
import 'components/styles/SigninPage.css';
import { GridColumn, Header } from 'semantic-ui-react';
import CenteredForm from 'components/templates/CenteredForm';

export default class SigninPage extends React.Component {
    render() {
        return (
            <CenteredForm>
                <GridColumn>
                    <Header as='h2' className="blue">
                        Sign in to your Account
                    </Header>
                    GridColumn
                </GridColumn>
            </CenteredForm>
        );
    };
}