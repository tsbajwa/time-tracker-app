import React from 'react';
import Button from './Button';
import edit from '../assets/edit.png';
import del from '../assets/del.png';

class Timer extends React.Component {

  handleDeleteClick = (e) => {
    e.preventDefault();
    this.props.delete(this.props.id)
    //this.props.toggleState
  }

  render() {
    return (
      <div className='timer'>
        <div className='timer__headings'>
          <h1>{this.props.title}</h1>
          <p>{this.props.project}</p>
        </div>
        <div className='timer__time'>
         Timer: {this.props.elapsed}
        </div>
        <div className='timer__editOptions'>
         <img src={edit} onClick={this.props.toggleState} alt='Edit timer' />
         <img src={del} onClick={this.handleDeleteClick} alt='Delete Timer' />
        </div>
          <Button 
          btnText='Start/Stop'
          />
      </div>
    );
  }
}

export default Timer;