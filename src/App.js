import React from 'react';
import './calc.scss';
import OperationButton from './OperationButton';
import Screen from './Screen';
import NumberButton from './NumberButton';

class Calculator extends React.Component{
  
  constructor(){
    super();
    this.state = {
      num1: "0",
      num2: null,
      operand: null,
      screenText: "0"
    }
    
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onOperandClick = this.onOperandClick.bind(this);
    this.makeCalculation = this.makeCalculation.bind(this);
    this.initalizeState = this.initalizeState.bind(this);

  }
  
  onButtonClick(e){
    var newNum = e.currentTarget.value;
    
    var num1 = this.state.num1;

    if(num1 !== null){
      
      if(newNum === "."){
        var indexofDot = num1.toString().indexOf(".");
        if(indexofDot===-1){
          num1 = num1.toString() + newNum.toString();
          this.setState({
            num1:num1,
            screenText: num1
          });
        }
      }
      else if(num1=="0"){
        this.setState({
          num1:Number(newNum),
          screenText: newNum
        });
      }
      else{
        num1 = num1.toString() + newNum.toString();
        this.setState({
          num1:num1,
          screenText: num1
        });
      }
    }
    else{
      this.setState({
        num1:Number(newNum),
        screenText: newNum
      });
    }
    
  }
  
  onOperandClick(e){
    var operand = e.currentTarget.value;


    if(this.state.operand){
      if(!this.state.num2){
        var temp = this.state.num1;
        this.setState({
          num1: null,
          num2: temp
        });
      }
      else{
        var temp = this.makeCalculation();
        this.setState({
          num1: null,
          num2: temp,
          operand: "+"
        });
      }
    }
    else{
      var temp = this.state.num1;
        this.setState({
          num1: null,
          num2: temp,
          operand: operand
        });
    }


    this.setState({
      operand: operand
    });

    if(this.state.operand){}

  }

  initalizeState(){
    this.setState({
      num1: 0,
      num2: null,
      operand: null,
      screenText: "0"
    });
  }

  makeCalculation(){

    var result = null;

    switch (this.state.operand){
      case "+":
        result = Number(this.state.num1) + Number(this.state.num2);
        break;
      case "-":
        result = Number(this.state.num2) - Number(this.state.num1);
        break;
      case "x":
        result = Number(this.state.num1) * Number(this.state.num2);
        break;
      case "/":
        result = Number(this.state.num2) / Number(this.state.num1);
        break;
      default:
    }

    if(result){
      this.setState({
        screenText : result,
        num1: result,
        num2: null,
        operand: null
      });
    }

    return result;
  }
  
  render(){
    
    var numberbuttons9_7 = [];
    
    for(var i=7; i<10; i++){
      numberbuttons9_7.push(
        <NumberButton key={i} text={i} onClick={this.onButtonClick}/>
      );
    }
    numberbuttons9_7.push(<OperationButton key="/" text="/" onClick={this.onOperandClick}/>);

    var numberbuttons6_4 = [];
    
    for(var i=4; i<7; i++){
      numberbuttons6_4.push(
        <NumberButton key={i} text={i} onClick={this.onButtonClick}/>
      );
    }
    numberbuttons6_4.push(<OperationButton key="x" text="x" onClick={this.onOperandClick}/>);


    var numberbuttons1_3 = [];
    
    for(var i=1; i<4; i++){
      numberbuttons1_3.push(
        <NumberButton key={i} text={i} onClick={this.onButtonClick}/>
      );
    }
    numberbuttons1_3.push(<OperationButton key="-" text="-" onClick={this.onOperandClick}/>);
    
    return(
    
      <div className="calculator">
        <div className="screen">
          <Screen text={this.state.screenText} />
        </div>
        <div className="numbers">
          <div className="numberedbuttons">
            {numberbuttons9_7}
            {numberbuttons6_4}
            {numberbuttons1_3}
            <NumberButton key="0" text="0" onClick={this.onButtonClick}/>
            <NumberButton key="." text="." onClick={this.onButtonClick}/>
            <OperationButton key="+" text="+" onClick={this.onOperandClick}/>
            <OperationButton key="="text="=" onClick={this.makeCalculation}/>
            <OperationButton key="AC" text="AC" onClick={this.initalizeState}/>

          </div>
        </div>
        
      </div>
      
    );
    
  }
}

export default Calculator;
