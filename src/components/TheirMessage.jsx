import React from 'react'

const TheirMessage = ({lastMessage, message}) => {
    //si sin mensajes de alguin mas debo saber si es el primer mensaje por ese usuario
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className='message-row'>
        {isFirstMessageByUser && (
            <div className='message-avatar' style={{backgroundImage:`url(${message?.sender?.avatar})`}}/>
        )}
        {message?.attachments?.lenght > 0
        ?(
            <img
            src={message.attachments[0].file}
            alt='imagen-mensaje'
            className='message-image'
            style={{marginLeft: isFirstMessageByUser ? '4px': '48px'}}
            />
        ):(
            <div className='message'style={{float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px': '48px'}}>
            {message.text}
        </div>
        )
        
}
    
    </div>
  )
}

export default TheirMessage