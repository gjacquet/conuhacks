// Team component on the listing page

import React from 'react';
import h from '../helpers';
import autobind from 'autobind-decorator';

@autobind
class Team extends React.Component {
  redirectToApp() {
    window.location.assign('/teams/' + this.props.index);
  }

  render() {
    var details = this.props.details;
    var response = details.data || {};

    var idClasses = 'adb-id adb-id__logo adb-id__sq_xlarge';
    var inactiveIcon = '';

    if (!details.active) {
      idClasses += ' adb-is-disabled';
      inactiveIcon = <i className="adb-icon__error adb-icon_alert adb-icon_alert__error"></i>
    }

    return (
        <div className="adb-tile" onClick={this.redirectToApp}>
          <div className={idClasses}>
            <a href={'/teams/' + this.props.index}>
            <img className="adb-id--img" src={response.projectPicture} />
            </a>
          </div>
          <h3>
            {inactiveIcon} {response.projectName}
          </h3>
        </div>
    )
  }
};


export default Team;
