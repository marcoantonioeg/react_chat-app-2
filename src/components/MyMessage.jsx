const MyMessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0) {
      return (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
      );
    }
  
    return (
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
        {message.text}
      </div>
    );
  };
  
  export default MyMessage;
/*import React from 'react'

const MyMessage = ({message}) => {
    //if para saber si el mensaje es texto o imagen
    if(message?.attachments?.lenght > 0){
        return(
            <img
            src={message.attachments[0].file}
            alt='imagen-mensaje'
            className='message-image'
            style={{float:'right'}}
            />
        )
    }
  return (
    <div className='message'style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
        {message.text}
    </div>
  )
}

export default MyMessage*/