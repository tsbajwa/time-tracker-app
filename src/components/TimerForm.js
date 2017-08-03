import React from 'react';
import Button from './Button';

class TimerForm extends React.Component {
  render() {
    return(
      <div>
        <div>
          <p>Title</p>
          <input type='text' defaultValue={this.props.title} />
          <p>Project</p>
          <input type='text' defaultValue={this.props.project} />
        </div>
        <div>
          <Button 
          btnText= {this.props.btnText || 'Update'}
          />
          <Button 
          btnText='Cancel'
          />
        </div>
      </div>
    );
  }
}

export default TimerForm;