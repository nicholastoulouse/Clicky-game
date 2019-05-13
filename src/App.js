import React, { Component } from 'react';
import logo from './logo.svg';
import images from '../public/images'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg", "12.jpg"];
    this.state = {
      score: 0,
      imgclicked: {
        '1.jpg': 0, '2.jpg': 0, '3.jpg': 0, '4.jpg': 0, '5.jpg': 0, '6.jpg': 0, '7.jpg': 0, '8.jpg': 0, '9.jpg': 0, '10.jpg': 0, '11.jpg': 0, '12.jpg': 0
      }
    }
  }
  render(){;
    html = [];
    this.images.forEach((src, i) => {
      let row;
      if(i%4 === 0){
        html.push(<div class='row'></div>);
      } else {
        let a = `./images/${this.images[i]}`;
        html.push(<div class='square'><img src={a} alt='pixar character' />
    });

  return (
    <div className="App container">
      <header>This is the header</header>
        {html}

      <footer>This is the footer</footer>
    </div>
  );
}
}

export default App;
