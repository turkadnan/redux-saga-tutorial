import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default class NewUserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });

    this.setState({
      firstName: "",
      lastName: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            placeholder="First name"
            onChange={this.handleFirstNameChange}
            value={this.state.firstName}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            placeholder="Last name"
            onChange={this.handleLastNameChange}
            value={this.state.lastName}
          />
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">
            Create
          </Button>
        </FormGroup>
      </Form>
    );
  }
}
