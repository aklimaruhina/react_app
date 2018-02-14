import React, { Component } from 'react';

import {Header} from './components/Header';
import {Footer} from './components/Footer';
// import {Home} from './components/Home';
// import {Bio} from './components/Bio';
// import {Core} from './components/Core';
// import {Events} from './components/Events';

// import {Media} from './components/Media';



class App extends Component {
	
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
