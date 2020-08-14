import React, { Component } from 'react';
import './App.css';
import Nevi from './Nevi';
import About from './About';
import Technic from './Technic';
import Project from './Project';

class App2 extends Component {
  render() {
    return (
      <div>
        <Nevi />
        {/* <Main /> */}
        <About />
        <Technic />
        <Project />
      </div>
    )
  }
}

// class Main extends Component {
//   render() {
//     return (
//       <div className="main_wrap">
//         <div>

//         </div>
//       </div>
//     )
//   }
// }

export default App2;