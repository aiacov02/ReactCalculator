import React from 'react';
import './calc.scss';

class OperationButton extends React.Component{
  
    constructor(props){
      super(props);
    }
    
    render(){
      return(
        <button className="OperationButton" onClick={this.props.onClick} id={"b" + this.props.text} value={this.props.text}>
          {this.props.text}
        </button>
      );
    }
  }

  export default OperationButton;