import React, { Component } from 'react'

class MessageForm extends Component {
    state = {
        body:'',

    }
    handleSubmit = (ev) =>{
        ev.preventDefault()
        this.props.addmessage(this.state.body)
    }

    handleChange = (ev) =>{
        this.setState({body: ev.target.value})
    }

    render() {
    return (
      <form onSubmit = {this.handleSubmit} className="MessageForm">
        <input
          autoFocus
          required
          type="text"
          name="body"
          placeholder="Type a message..."
          value = {this.state.body}
          onChange =  {this.handleChange}
        />
        <button type="submit">
          Send
        </button>
      </form>
    )
  }
}

export default MessageForm