import React, {useState} from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'
const MessageForm = (props) => {
    //estado para el valor de los mensajes
    const[value, setValue] = useState('')
    //obtengo el chatId y credenciales desde los props
    const {chatId, creds} = props;
    const handleSubmit = (event)=>{
        //funcion para que no se refresque la página al dar ENTER
        event.preventDefault();
        //obtengo el texto dle mensaje
        const text = value.trim();
        //verifico que el mensaje sea mayor a cero para que pueda enviar
        if(text.length>0) sendMessage(creds, chatId, {text});
        //despues de enviar el mensaje reseteo el input
        setValue('');
    }
    const handleChange = (event)=>{
        //asigno el valor al state de lo que escriban en el input
        setValue(event.target.value);
        isTyping(props, chatId)
    }
    //funcion para subir imagenes
    const handleUpload = (event) =>{
        sendMessage(creds, chatId, {files: event.target.files, text: ''})
    }
  return (
    <form className='message-form' onSubmit={handleSubmit}>
        <input
        className='message-input'
        placeholder='Envía un mensaje...'
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />
        <label htmlFor='upload-button'>
            <span className='image-button'>
                <PictureOutlined className='picture-icon'/>
            </span>
        </label>
        <input
        type='file'
        multiple={false}
        id='upload-button'
        style={{display:'none'}}
        onChange={handleUpload}
        />
        <button type='submit' className='send-button'>
            <SendOutlined className='send-icon'/>
        </button>
    </form>
  )
}

export default MessageForm