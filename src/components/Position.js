import React from 'react'

class Position extends React.Component {
    render (){
    const {name, difficulty, image } = this.props.position;
    return (
      <div>
        <h3 className="text-center">
          {name}
        </h3>
        <p className="text-center">
          {difficulty}
        </p>
        <img src={image} alt={image} />
      </div>
    )
  }
}

export default Position;


