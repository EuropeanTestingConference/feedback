import React from 'react';

class Feedback extends React.Component {


  submitFeedback( rating ){

    var room = document.getElementById("room").value;
    var time = new Date()
    var feedback = { room: room, rating: rating, time: time.toString() }
    
    this.props.submit( feedback );
  }

  render(){

    return(
      <div>

          <select id="room">
             <option value="A">A</option>
              <option value="B">B</option>
              <option selected value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>

            <button onClick={() => this.submitFeedback(5)}> <img  src="http://feedback.rinkkasatiainen.fi/Happy.png"/></button>
            <button onClick={() => this.submitFeedback(3)}>  <img src="http://feedback.rinkkasatiainen.fi/Meh.png"/></button>
            <button onClick={() => this.submitFeedback(1)}> <img src="http://feedback.rinkkasatiainen.fi/Sad.png/> </button>

        </div>
    )

  }

}

export default Feedback;
