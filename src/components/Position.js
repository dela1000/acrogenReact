import React from 'react'

class Position extends React.Component {
    render (){
    const {name, difficulty, image } = this.props.position;
    return (
      <div className="margin-top-large">
        <div>
          <div className="text-center float-left">
            {name}
          </div>
          <div className="margin-top-small text-center float-right font-size-large">
            {difficulty}
          </div>
        </div>
        <img className="min-width-100" src={image} alt={image} />
      </div>
    )
  }
}

export default Position;


