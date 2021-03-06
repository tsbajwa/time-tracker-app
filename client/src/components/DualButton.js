import React from 'react';

export default class DualButton extends React.Component {
  render() {
    if (this.props.start) {
      return (
        <button className="dualbutton__btn dualbutton__btn--stop"onClick={this.props.onStopClick}>{this.props.stopBtnText}</button>
      )
    } else {
      return (
        <button className="dualbutton__btn dualbutton__btn--start"onClick={this.props.onStartClick}>{this.props.startBtnText}</button>
      )
    }
  }
}
