import React, { Component, PropTypes } from 'react';
import './UserCard.scss';

class UserCard extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    let user = this.props.user;

    return (
      <div className="UserCard">
        <div class="vcard">
          <img class="photo" src={user.avatar}/>
          <h4 class="fn">{user.name}</h4>
          <h6 class="title">{user.occupation}</h6>
        </div>
      </div>
    );
  }

}

export default UserCard;
