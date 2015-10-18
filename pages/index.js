import React, { Component } from 'react';
import UserCard from '../components/UserCard';
import userDetails from '../static/data/users.json';

export default class extends Component {

  componentWillMount() {
    this.setState({
      users: userDetails
    });
  }

  render() {
    let users = this.state.users;

    return (
      <div>
        <h1>User List</h1>
        <ul>
          { users.map((user) =>
              <li><UserCard key={user.id} user={user}></UserCard></li>
          )}
        </ul>
      </div>
    );
  }

}
