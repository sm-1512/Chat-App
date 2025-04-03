import React from 'react'
import { useChatStore } from '../store/useChatStore'

const ChatContainer = () => {
  const {messages, getMessages, isMessagesLoading, selectedUser} = useChatStore();

  if(isMessagesLoading) return <div>Loading...</div>
  return (
    <div>ChatContainer</div>
  )
}

export default ChatContainer