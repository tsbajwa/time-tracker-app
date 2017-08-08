import React from 'react';

class DualButton extends React.Component {
  render() {
    if (this.props.start) {
      return (
        <button onClick={this.props.startOnClick}>{this.props.startBtnText}</button>
      )
    } else {
      return (
        <button onClick={this.props.stopOnClick}>{this.props.stopBtnText}</button>
      )
    }
  }
}

export default DualButton;