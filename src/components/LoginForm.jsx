import React, {useState} from 'react'
import axios from 'axios';
const LoginForm = () => {
    //estado para el usuario
    const [username, setUsername] = useState('')
    //estado para la contraseña
    const [password, setPassword] = useState('');
    //estado para pos si las credenciales son incorrectas
    const [error, setError] = useState('')
    //function para submit
    const handleSubmit = async (e) =>{
        //previene el refresh
        e.preventDefault()
        //obtengo los mensajes 
        const authObject = {'Project-ID': '1f50bdd9-a31a-448d-92b7-408c9f3fb550', 'User-Name': username, 'User-Secret': password}
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})
            //guardo el usuario y contraseña en el local storage
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            //recargo la pagina
            window.location.reload();
        } catch (error) {
            setError('Oops, credenciales incorrectas')
        }
    }
  return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className='title'>Chat-T-App</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} className='input' placeholder='Usuario' required />
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Contraseña' required />
                <div align='center'>
                    <button type='submit' className='button'>
                        <span>Comienza a chatear</span>
                    </button>
                </div>
                <h2 className='error'>{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm