import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }
  }

  addMessage = (body) => {
    const messages = [...this.state.messages]
    const user = this.props.user

    messages.push({
      id: `${user.uid}-${Date.now()}`,
      time:`${new Date().getHours() + ":" +new Date().getMinutes()}`,
      user,
      body,
    })

    this.setState({ messages })
  }

  render() {
    return (
      <div style = {styles.Chat} className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage} />
      </div>
    )
  }
}

const styles = {
  Chat: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }
  
}
export default Chat