import React from 'react';
import './calc.scss';
import DynamicFont from 'react-dynamic-font';
import {Textfit } from 'react-textfit';


class Screen extends React.Component{
  
  constructor(props){
    super(props);
    
  }

  render(){

    return (
        <Textfit className="screenNumber" mode="single">
            {this.props.text}
        </Textfit>
    //   <div className="screenNumber">
    //       <DynamicFont smooth content={this.props.text}/>
    //   </div>
    );
  }
  
}

export default Screen;