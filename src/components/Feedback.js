import React from 'react';

class Feedback extends React.Component {


  constructor (props) {
    super(props)
    this.state = {}
    this.state.b5 = false
    this.state.b3 = false
    this.state.b1 = false
    this.fadingDone = this.fadingDone.bind(this)
  }
  componentDidMount () {
    const b5 = this.refs.b5
    const b3 = this.refs.b3
    const b1 = this.refs.b1
    b5.addEventListener('animationend', () => this.fadingDone("b5"))
    b3.addEventListener('animationend', () => this.fadingDone("b3"))
    b1.addEventListener('animationend', () => this.fadingDone("b1"))
  }
  componentWillUnmount () {
    const b5 = this.refs.b5
    const b3 = this.refs.b3
    const b1 = this.refs.b1
    b5.removeEventListener('animationend', () => this.fadingDone("b5"))
    b3.removeEventListener('animationend', () => this.fadingDone("b3"))
    b1.removeEventListener('animationend', () => this.fadingDone("b1"))
  }

  fadingDone( button ){
    console.log( button )
    this.setState({[button]: false})
  }

  submitFeedback( rating , button){
    this.setState({[button]: true})
    var room = document.getElementById("room").value;
    var time = new Date()
    var feedback = { room: room, rating: rating, time: time.toString() }
    
    this.props.submit( feedback );
  }

  render(){

    return(
      <div>

        <br/>
        <br/>
        <br/>
          Please Select Room: <select id="room" >
             <option selected value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
            </select>
            <br/>

            <div style={{widht:"100%"}}>
            <button ref='b1' style={{"maxWidth": "30%"}} className={this.state.b1 ? 'b1' : ''}  onClick={() => this.submitFeedback(1, "b1")}> <img style={{width:"100%"}} src="http://feedback.rinkkasatiainen.fi/Sad.png"/> </button>
            <button ref='b3' style={{"maxWidth": "30%"}} className={this.state.b3 ? 'b3' : ''} onClick={() => this.submitFeedback(3, "b3")}>  <img style={{width:"100%"}} src="http://feedback.rinkkasatiainen.fi/Meh.png"/></button>
            <button ref='b5' style={{"maxWidth": "30%"}} className={this.state.b5 ? 'b5' : ''} onClick={() => this.submitFeedback(5, "b5")}> <img style={{width:"100%"}} src="http://feedback.rinkkasatiainen.fi/Happy.png"/></button>

          </div>
        </div>
    )

  }

}

export default Feedback;
