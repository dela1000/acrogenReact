import React from 'react';
import _ from 'lodash';


import { randomGen } from '../helpers';
class Selector extends React.Component {

    state = {
      numberSelected: 4,
      randomIndexPositions: null,
      diffs: {
        beginner: true,
        intermediate: false,
        advanced:  false,
        all: false,
      }
    }

    optionRange = _.range(2, 11);

    diffSelector = (key) => {
      let diffs = {...this.state.diffs}
      if(key !== "all"){
        diffs.all = false;
        diffs[key] = !diffs[key];
      }

      if((diffs.beginner && diffs.intermediate && diffs.advanced) || 
        (!diffs.beginner && !diffs.intermediate && !diffs.advanced) || 
        (key === "all")){
        diffs = {
          beginner: false,
          intermediate: false,
          advanced:  false,
          all: true,
        }
      }
      this.setState({ diffs })
      this.createFlow(this.state.numberSelected, diffs)
    }

    numberSelected = (index) => {
      let numberSelected = {...this.state.numberSelected}
      numberSelected = index;
      this.setState({ numberSelected })
      this.createFlow(index, this.state.diffs)
    }

    createFlow = (moves, diffs) => {
      let randomIndexPositions = {...this.state.randomIndexPositions};
      randomIndexPositions = randomGen(moves, diffs);
      this.setState({ randomIndexPositions })
    }

    componentDidMount() {
      this.numberSelected(this.state.numberSelected);
    }

    // componentDidUpdate = () => {
    //   console.log("this.state.randomIndexPositions: ", JSON.stringify(this.state.randomIndexPositions, null, "\t"));
    // }

    goToFlow = (event) => {
      event.preventDefault();
      this.props.history.push(`/flow/${this.state.randomIndexPositions}`)
    }

    render() {
      return (
        <form className="holder-outer"  onSubmit={this.goToFlow}>
          <div className="holder-inner">
            {this.optionRange.map((index) =>
              <div className={"margin-small option-range select-boxes " + (this.state.numberSelected === index ? 'text-white' : 'text-black')} key={index} onClick={() => this.numberSelected(index)}>
                  {index}
              </div>
            )}
          </div>
          <div className="holder-inner">
            {Object.keys(this.state.diffs).map((key, index) => (
              <div className={"margin-small diff-range select-boxes " + (this.state.diffs[key] ? 'text-white' : 'text-black')} key={index} onClick={() => this.diffSelector(_.lowerCase(key))}>
                  {key}
              </div>
            ))}
          </div>
          <div className="holder-inner">
            <button type="submit">See Flow</button>
          </div>
        </form>
      )
    }
}

export default Selector;