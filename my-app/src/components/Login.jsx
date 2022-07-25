import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')

    const[show,setShow]=useState(false)

    async function LoginUser (body){
        body = JSON.stringify({
            userbody : body
        });
        console.log(body)
        try {
            const res = await fetch(
                `http://localhost:3000/users`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': "application/json"
                  },
                  body,
                }
              )
            let data = await res.json()
            console.log(data)
            setShow(true)
        } catch (error) {
            console.log(error)
        }
    }

    
    const handleClick = ( ) =>{
        const body = {
            email:email,
            password:password
        }
        LoginUser(body)
    }
  return (
    <div>
      <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder='email' onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleClick}>Login</button>

      {show  ? <p>Logged in Succcesfully </p> :''}
    </div>
  )
}

export default Login

// "email": "Gagan@gmail.com",
// "password": "Gaganpassword"