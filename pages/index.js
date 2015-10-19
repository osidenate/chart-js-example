import React, { Component } from 'react';
import UserCard from '../components/UserCard';
import userDetails from '../static/data/users.json';
import Worker from 'worker!../lib/LogCounter.js';
import reqwest from 'reqwest';

export default class extends Component {

  loadUserStats() {
    let logCounterWorker = new Worker();

    logCounterWorker.onmessage = (msg) => {
      let data = msg.data;
      if (data.event === 'updateTotals') {
        this.setState({ userStats: data.payload });
      }
    };

    reqwest({
      url: 'data/logs.json',
      method: 'GET',
      success: (response) => {
        logCounterWorker.postMessage({
          event: 'calculateTotals',
          payload: response
        });
      }
    });
  }

  componentWillMount() {
    this.setState({
      users: userDetails,
      userStats: {}
    });
  }

  componentDidMount() {
    this.loadUserStats();
    // TODO this.loadChartData();
  }

  render() {
    let users = this.state.users;
    let userStats = this.state.userStats;

    return (
      <ul>
        {
          users.map((user) =>
            <li key={user.id} className="card"><UserCard user={user} stats={userStats[user.id] || {}}></UserCard></li>)
        }
      </ul>
    );
  }
}
