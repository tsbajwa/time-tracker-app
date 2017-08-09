import React from 'react';
import DualButton from './DualButton';
import edit from '../assets/edit.png';
import del from '../assets/del.png';
import { renderTime } from '../util/helpers';

export default class Timer extends React.Component {
  componentDidMount() {
    this.refreshTimer = setInterval(() => this.forceUpdate(), 50);
  }
  componentWillUnmount = () => {
    clearInterval(this.refreshTimer);
  }

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  }
  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  }
  
  render() {
    return (
      <div className='timer'>
        <div className='timer__headings'>
          <h1>{this.props.title}</h1>
          <p>{this.props.project}</p>
        </div>
        <div className='timer__time'>
         {renderTime(this.props.elapsed, this.props.runningSince)}
        </div>
        <div className='timer__editOptions'>
         <img src={edit} onClick={this.props.iconOneClick} alt='Edit timer' />
         <img src={del} onClick={() => this.props.iconTwoClick(this.props.id)} alt='Delete Timer' />
        </div>
        <DualButton
          start={!!this.props.runningSince}
          onStartClick={this.handleStartClick}
          startBtnText='Start'
          onStopClick={this.handleStopClick}
          stopBtnText='Stop'
          />
      </div>
    );
  }
}

