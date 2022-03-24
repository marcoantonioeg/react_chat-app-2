import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
const App = () => {
    //if para por si no estas logeado mostrar el loginscreen y si ya te logueaste mostrar el chat
    if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine height="100vh" 
    projectID="1f50bdd9-a31a-448d-92b7-408c9f3fb550" 
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>} />
  )
}

export default App