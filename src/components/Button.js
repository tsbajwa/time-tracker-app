import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button>{this.props.btnText}</button>
    );
  }
}

export default Button;