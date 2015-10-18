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
        <ul>
          { users.map((user) =>
              <li key={user.id} className="card"><UserCard user={user}></UserCard></li>
          )}
        </ul>
    );
  }

}
