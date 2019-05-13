import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
// import headshots from '../public/images';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"];
    this.state = {
      score: 0,
      imgclicked: {
        '0.jpg': 0, '1.jpg': 0, '2.jpg': 0, '3.jpg': 0, '4.jpg': 0, '5.jpg': 0, '6.jpg': 0, '7.jpg': 0, '8.jpg': 0, '9.jpg': 0, '10.jpg': 0, '11.jpg': 0
      }
    }
  }

  clickImage = (index) => {
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
    }

  }

  render(){
    // html = [];
    // this.images.forEach((src, i) => {
    //   let row;
    //   if(i%4 === 0){
    //     html.push(<div class='row'></div>);
    //   } else {
    //     let a = `./images/${this.images[i]}`;
    //     html.push(<div class='square'><img src={a} alt='pixar character' />
    // });
  const cols = 4;
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://www.pixar.com/" target="_blank" rel="noopener noreferrer">Pixar Actors</a>
      </header>
      <div className="container">
      { this.images.map((url, index) => {
        if(index%cols==0){
          return ([<div class='row'>,<img src={"./images/" + url} className="square" alt="pixar characters" onClick={() => this.clickImage(index)} />]);
        } else if(index%cols == 3){
          return ([<img src={"./images/" + url} className="square" alt="pixar characters" onClick={() => this.clickImage(index)} />,</div>]);
        } else {
          return (<img src={"./images/" + url} className="square" alt="pixar characters" onClick={() => this.clickImage(index)} />);
        }
      })
      }
      </div>
      <footer>This is the footer</footer>
    </div>
  );
}
}
/*
ReactDOM.render(
  <Products products={ [1, 2, 3, 4, 5, 6, 7 ] } />,
  document.getElementById('container')
);
*/
const Gameboard = (props) => {
  const numRows = [...Array( Math.ceil(props.imagefiles.length / 4) )];
  const boardRows = numRows.map( (row, i) => props.imagefiles.slice(i * 4, i * 4 + 4) );
  const content = boardRows.map((row, idx) => (
        <div className="row" key={idx}>    
        { row.map( url => <img src={"./images/" + url} className="square" alt="pixar characters" onClick={() => this.clickImage(index)} /> )}
        </div> )
  );
  return (
    <div>
        {content}
    </div>
  );
}

export default App;
