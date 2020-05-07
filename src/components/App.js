import React, { Component } from "react";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequst,
  deleteUserRequst,
  usersError,
} from "../actions/users";
import UsersList from "./UsersList";
import NewUserForm from "./NewUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  }

  handleCloseAlert = () => {
    this.props.usersError({ error: "" });
  };

  handleSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequst({ firstName, lastName });
  };

  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequst({ userId });
  };

  render() {
    const users = this.props.users;

    return (
      <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
        <Alert
          color="danger"
          isOpen={!!this.props.users.error}
          toggle={this.handleCloseAlert}
        >
          {this.props.users.error}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList
          users={users.items}
          onDeleteUser={this.handleDeleteUserClick}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps, {
  getUsersRequest,
  createUserRequst,
  deleteUserRequst,
  usersError,
})(App);
