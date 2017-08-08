import React from 'react';
import DualButton from './DualButton';
import edit from '../assets/edit.png';
import del from '../assets/del.png';
import { msToTime } from '../util/helpers';

class Timer extends React.Component {
  state = {
    start: true,
  }

  handleToggleTimerClick = (e) => {
    e.preventDefault();
    this.setState({ start: false, })
    this.props.timerStartTime(this.props.id);
    this.toggleTimer = setInterval(this.props.toggleTimer,1000,this.props.id);
  }

  handleStopOnClick = () => {
   this.setState({ start: true, });
   clearInterval(this.toggleTimer);
   this.props.recordPaused(this.props.id);
  }

  render() {
    return (
      <div className='timer'>
        <div className='timer__headings'>
          <h1>{this.props.title}</h1>
          <p>{this.props.project}</p>
        </div>
        <div className='timer__time'>
         {msToTime(this.props.elapsed)}
        </div>
        <div className='timer__editOptions'>
         <img src={edit} onClick={this.props.toggleState} alt='Edit timer' />
         <img src={del} onClick={() => this.props.delete(this.props.id)} alt='Delete Timer' />
        </div>
        <DualButton
          start={this.state.start}
          startOnClick={this.handleToggleTimerClick}
          startBtnText='Start'
          stopOnClick={this.handleStopOnClick}
          stopBtnText='Stop'
          />
      </div>
    );
  }
}

export default Timer;