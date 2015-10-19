import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs';
import invert from 'lodash/object/invert';
import './UserCard.scss';

class UserCard extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    stats: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.setState({ avatarNotFound: false });
  }

  onAvatarError() {
    this.setState({ avatarNotFound: true });
  }

  renderConversionsChart() {
    let lineChart = null;
    let chartOptions = {
      showScale: false,
      pointDotRadius: 2,
      datasetFill: false
    };

    if (this.props.stats.chartData) {
      let chartData = [];
      let data = this.props.stats.chartData;
      let chartDates = Object.keys(data).sort();
      chartDates.forEach((date) => chartData.push(data[date]));

      let chart = {
        labels: chartDates,
        datasets: [{
          label: 'conversions',
          data: chartData
        }]
      };

      lineChart = <Line data={chart} options={chartOptions}/>;
    }

    return lineChart;
  }

  render() {
    let user = this.props.user;
    let avatarNotFound = this.state.avatarNotFound;
    let impressions = this.props.stats.impressions || 0;
    let conversions = this.props.stats.conversions || 0;
    let revenue = this.props.stats.revenue || 0;

    let avatar = (() => {
      if (user.avatar && !avatarNotFound) {
        return <img className="photo" src={user.avatar} onError={this.onAvatarError.bind(this)}/>;
      }
      else {
        let initial = user.name[0];
        return <div className="avatar">{initial}</div>;
      }
    })();

    let conversionsChart = this.renderConversionsChart();

    return (
      <div className="UserCard">
        <div className="vcard">
          {avatar}
          <div className="signature">
            <h4 className="fn">{user.name}</h4>
            <h6 className="title">{user.occupation}</h6>
          </div>
        </div>
        <div className="stats">
          <div className="impressions-total total">{impressions}</div>
          <div className="impressions-label">impressions</div>
          <div className="conversions-total total">{conversions}</div>
          <div className="conversions-label">conversions</div>
          <div className="revenue-total total">${revenue.toFixed(2)}</div>
        </div>
        <div className="chart">
          {conversionsChart}
        </div>
      </div>
    );
  }
}

export default UserCard;
