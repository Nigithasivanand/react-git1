import React, { Component } from 'react';
import File from './File';

 class App extends Component {
   constructor() {
     super();
    this.state = {
     msg: 'lamNEO',
         };
   }

   handleClick = () => {
     this.setState({ msg: 'Welcome to React' });
   };

   render() {
    return (
      <div>
         <File msg={this.state.msg} onClick={this.handleClick} />
      </div>
     );
   }
 }
export default App;