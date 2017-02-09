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

          <select id="room" >
             <option value="A">A</option>
              <option value="B">B</option>
              <option selected value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <br/>

            <div style={{widht:"100%"}}>
            <button style={{"maxWidth": "30%"}} onClick={() => this.submitFeedback(1)}> <img style={{width:"100%"}} src="http://feedback.rinkkasatiainen.fi/Sad.png"/> </button>
            <button style={{"maxWidth": "30%"}} onClick={() => this.submitFeedback(3)}>  <img style={{width:"100%"}} src="http://feedback.rinkkasatiainen.fi/Meh.png"/></button>
            <button style={{"maxWidth": "30%"}} onClick={() => this.submitFeedback(5)}> <img style={{width:"100%"}} src="http://feedback.rinkkasatiainen.fi/Happy.png"/></button>

          </div>
        </div>
    )

  }

}

export default Feedback;
