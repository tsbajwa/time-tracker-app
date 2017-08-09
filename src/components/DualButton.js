import React from 'react';

export default class DualButton extends React.Component {
  render() {
    if (this.props.start) {
      return (
        <button onClick={this.props.onStopClick}>{this.props.stopBtnText}</button>
        
      )
    } else {
      return (
        <button onClick={this.props.onStartClick}>{this.props.startBtnText}</button>
      )
    }
  }
}
