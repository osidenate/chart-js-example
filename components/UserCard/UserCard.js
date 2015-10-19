import React, { Component, PropTypes } from 'react';
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

  render() {
    let user = this.props.user;
    let avatarNotFound = this.state.avatarNotFound;

    let avatar = (() => {
      if (user.avatar && !avatarNotFound) {
        return <img className="photo" src={user.avatar} onError={this.onAvatarError.bind(this)}/>;
      }
      else {
        let initial = user.name[0];
        return <div className="avatar">{initial}</div>;
      }
    })();

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
          <div className="impressions-total total">{this.props.stats.impressions}</div>
          <div className="impressions-label">impressions</div>
          <div className="conversions-total total">{this.props.stats.conversions}</div>
          <div className="conversions-label">conversions</div>
          <div className="revenue-total total">${this.props.stats.revenue.toFixed(2)}</div>
        </div>
      </div>
    );
  }

}

export default UserCard;
