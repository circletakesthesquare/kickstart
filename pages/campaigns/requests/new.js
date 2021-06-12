import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: ''
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Description</label>
          <Input
            value={this.state.description}
            onChange={event =>
             this.setState({ description: event.target.value })}
          />
        </Form.Field>

        <Form.Field>
          <label>Value in Ether</label>
          <Input
            value={this.state.value}
            onChange={event =>
              this.setState({ value: event.target.value })}
          />
        </Form.Field>

        <Form.Field>
          <label>Recipient</label>
          <Input
            recipient={this.state.recipient}
            onChange={event =>
              this.setState({recipient: event.target.value})}
          />
        </Form.Field>

      </Form>

    );
  }
}

export default RequestNew;