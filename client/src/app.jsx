import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navBar.jsx';
import Main from './components/main.jsx';
import DeviceSim from './components/deviceSim.jsx';

const s = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '100px 1fr',
    gridTemplateRows: '1fr', //placeholder
    gridGap: '5px',
    height: '95vh'
  },
  nav: {
    gridArea: '1/1 / -1/1',
    backgroundColor: 'grey',
    height: '100%',
    textAlign: 'center'
  },
  page: {
    backgroundColor: 'pink'
  },
  sim: {
    backgroundColor: 'lightBlue'
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      settings: {
        faceAssignment: [
          {id: 22, name: 'Reading', color: '#ff9999'},
          {id: 23, name: 'Phone Calls', color: '#660066'},
          {id: 24, name: 'Browsing Reddit', color: '#ffcc00'},
          {id: 25, name: 'Walking in Circles', color: '#669999'},
          {id: 26, name: 'Complaining', color: '#66ccff'},
          {id: 33, name: 'Debugging', color: '#993333'},
          {id: 66, name: 'Lunch', color: '#ff99ff'},
          {id: 76, name: 'Napping', color: '#666633'}
        ]
      },
      history: {},
      timer: {
        on: false,
        start: 0,
        stop: 0,
        count: 0
      },
      orientation: 0
    };
  }
<<<<<<< HEAD:client/src/app.jsx

  startTimer(selection) {

  }
  stopTimer(selection) {

  }

=======
  
>>>>>>> 447dda6757081a8f585543a1f21bfc699fad69e5:client/src/index.jsx
  render() {
    return(

      <div style={s.wrap}>
        <div style={s.nav}>
          <NavBar/>
        </div>
        <div style={s.page}>
<<<<<<< HEAD:client/src/app.jsx
          <Main settings={this.state.settings} orientation={this.state.orientation} />
=======
          <Main settings={this.state.settings}/>

>>>>>>> 447dda6757081a8f585543a1f21bfc699fad69e5:client/src/index.jsx
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));