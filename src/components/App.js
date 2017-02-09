import React from 'react';
import Header from './Header';
import Feedback from './Feedback';
import base from '../base';

class App extends React.Component {
  constructor() {
    super();

   
    this.submit = this.submit.bind(this);
  }

  state = {
    rooms: []
  };

  componentWillMount() {
    // this runs right before the <App> is rendered
    //  this.ref = base.syncState(`feedback`, {
    // context: this,
    // state: 'rooms'
    // });
  }

  componentWillUnmount() {
    //base.removeBinding(this.ref);
  }


  submit(  feedback )  {
    base.database().ref('feedback').push ( feedback )
    console.log ({feedback})
    //    var rooms = this.state.rooms

    //    rooms.push( feedback )
    //    this.setState({ rooms } ) 
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
        <Feedback room={this.state.rooms}
          submit={this.submit}
        />
      </div>
    )
  }
}


export default App
