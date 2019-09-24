import React from 'react';
import './calc.scss';


class NumberButton extends React.Component{
  
    constructor(props){
      super(props);
      this.state = {
        text : this.props.text
      }
    }
    
    render(){
      return(
        <button id={"b" + this.props.text} value={this.props.text} onClick={this.props.onClick} className="NumberButton">
          {this.state.text}
        </button>
      );
    }
  }

  export default NumberButton;