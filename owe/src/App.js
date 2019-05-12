import React from 'react';
import Header from './components/layout/Header';
import YouOweTotal from './components/YouOweTotal';
import TheyOweTotal from './components/TheyOweTotal';
import TheyOweList from './components/TheyOweList';
import uuid from 'uuid';

import './App.css';

// import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  // state = {
  //   theyOwe: [],
  //   youOwe: [],
  // }

  state = {
    theyOwe: [
      {
        id: uuid.v4(),
        itemName: 'Headset',
        money: 350,
      },
      {
        id: uuid.v4(),
        itemName: 'Drikke',
        money: 120,
      },
    ],
    youOwe: {
      id: uuid.v4(),
    }
  }



  render() {
    console.log(this.state.theyOwe);

    return (
      <div className="App">
        <Header />
        <div className="totalOweContainer">
          {/* Disse skal bli en, sjekk App.css for denne hvis du ikke skjønner hvorfor boksene går nedover */}
          <TheyOweTotal />
          <YouOweTotal />
        </div>

        <div className="oweLists">
          <TheyOweList theyOweList={this.state.theyOwe}/>

        </div>
        
      </div>
    );
  }
}

export default App;