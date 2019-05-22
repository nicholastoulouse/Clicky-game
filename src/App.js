import React, { Component } from 'react';

import ReactDOM from 'react-dom';


import logo from './logo.svg';

import './App.css';

import Toolbar from './components/Toolbar/Toolbar';



class Card extends Component {
  render() {
    return (
      <img src={"./images/" + this.props.filename + ".jpg"} className="square" alt="pixar characters" onClick={() => this.props.trackScore(this.props.filename)} />
    );
  }
}

class Gameboard extends Component {
  constructor(){
    super();
    this.state = {
      won: false,
      lost: false
    }
  }
  resetGame = () => {
    prompt("Do you want to play again?")
  }
  render(){
    this.props.images.sort(() => Math.random() - 0.5); // shuffle the images array
    const cols = 4;
    const numRows = [...Array( Math.ceil(this.props.images.length / cols) )]; // 3 rows; make an outer array of length # rows with undefined values
    const boardRows = numRows.map( (row, i) => this.props.images.slice(i * cols, i * cols + cols) ); // 4 cols; make a 2D array of inner column arrays for # rows in outer array
    const boardLayout = boardRows.map((row, idx) => (
      <div className="row">
        { row.map( (pictureName) => <Card filename={pictureName} trackScore={this.props.trackScore} /> )}
      </div> )
    );
  return (
    <div>
        {boardLayout}
    </div>
  );
  }
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      score: 0,
      imgclicked: {
        '0.jpg': 0, '1.jpg': 0, '2.jpg': 0, '3.jpg': 0, '4.jpg': 0, '5.jpg': 0, '6.jpg': 0, '7.jpg': 0, '8.jpg': 0, '9.jpg': 0, '10.jpg': 0, '11.jpg': 0
      }
    }
  }
 
  trackScore = (index) => {
    let imgName = index + '.jpg'; // make the name of the image file based on array index
    let points = parseInt(this.state.score);  // get the score from state
    let imgIncr = {...this.state.imgclicked}; // create a copy
    if(imgIncr[imgName] === 0){ // first time clicking that image
      imgIncr[imgName] += 1; // initialize click value
      points += 1; // increment score by 1
      console.log("new state: ", JSON.stringify({ score: points,imgclicked: {...imgIncr} }));
      this.setState({ score: points, imgclicked: {...imgIncr} }); // return state
    } else if(imgIncr[imgName] === 1){ // user has clicked an image twice
      points -= 1; // decrement score
      this.setState({ score: points });
      if (points < 1) {
        
        alert('Game Over');
      }
    }
  }
  
  render(){
  return (
    
    <div className="App">
    
      <Toolbar  result = {this.state.score} />
      <div className="App container">
        <Gameboard trackScore={this.trackScore} images={[0,1,2,3,4,5,6,7,8,9,10,11]} />
      </div>
    </div>
  );
}
}


export default App;
