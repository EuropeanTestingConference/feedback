import React from 'react';

class Feedback extends React.Component {


  submitFeedback( rating ){

    var room = document.getElementById("room").value;
    var feedback = { room: room, rating: rating, time: new Date()}
    
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
            </select>
      
            <button onClick={() => this.submitFeedback(5)}> <img  src="http://www.clker.com/cliparts/d/E/Y/K/Q/E/happy-green-face-md.png"/></button>
            <button onClick={() => this.submitFeedback(3)}>  <img src="http://www.clker.com/cliparts/e/8/3/a/11949864601483835659smiley103.svg.med.png"/></button>
            <button onClick={() => this.submitFeedback(1)}> <img src="http://www.clker.com/cliparts/b/3/7/9/1206573862448734250Arnoud999_Right_or_wrong_3.svg.med.png"/> </button>

        </div>
    )

  }

}

export default Feedback;
