import React from 'react';
import Button from './Button';
import edit from '../assets/edit.png';
import del from '../assets/del.png';

class Timer extends React.Component {
  render() {
    return (
      <div className='timer'>
        <div className='timer__headings'>
          <h1>{this.props.title}</h1>
          <p>{this.props.project}</p>
        </div>
        <div className='timer__time'>
         Timer: 9:34:23
        </div>
        <div className='timer__editOptions'>
         <img src={edit} alt='Edit timer' />
         <img src={del} alt='Delete Timer' />
        </div>
          <Button 
          btnText='Start/Stop'
          />
      </div>
    );
  }
}

export default Timer;