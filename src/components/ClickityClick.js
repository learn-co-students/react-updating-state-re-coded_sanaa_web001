// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      count: 0
    };
  }
 
  handleClick = () => {
    // Update our state here...
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
    })
  };
 
  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
 
export default ClickityClick;