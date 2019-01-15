import React from 'react';

import Position from './Position';

import { positionsList } from '../acroPositions';

class Flow extends React.Component {

  goBack = (event) => {
    event.preventDefault();
    this.props.history.push(`/selector`)
  }

  randomIndexPositions = this.props.match.params.randomIndexPositions;
  positionsArray = this.randomIndexPositions.split(',');

  render (){
    return (
      <div className="holder-outer">
        <div className="holder-inner margin-bottom-large">
          <button type="submit" onClick={this.goBack}>Go Back</button>
        </div>
        <div  className="holder-inner">
          {this.positionsArray.map((index) =>
            <Position key={index} value={index} position={positionsList[index]}/>
          )}
        </div>
        <div className="holder-inner margin-top-large">
          <button type="submit" onClick={this.goBack}>Go Back</button>
        </div>
      </div>
    )
  }
}

export default Flow;