import React from 'react';
import Header from './Header';
import Feedback from './Feedback';
import base from '../base';

class App extends React.Component {
  constructor() {
    super();

  }

  state = {
    rooms: {}
  };

  componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.syncState(`feedback`, {
      context: this,
      state: 'rooms'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }


  submit(  feedback )  {
    console.log( {feedback} )
  }

  removeFromOrder(key) {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }

  render() {
    return (
      <div className="conference-feedbac">
        <Header tagline="Fresh Seafood Market" />
        <ul className="list-of-rooms">
            {
              Object
                .keys(this.state.rooms)
                .map(key => <Room key={key} index={key} />)
            }
        </ul>
        <Feedback room={this.state.rooms}
          submit={this.submit}
        />
      </div>
    )
  }
}


export default App
