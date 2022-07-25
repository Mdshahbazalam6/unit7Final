import React from 'react'
import { useState } from 'react'

const Signin = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    async function registerUser (body){
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
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = ( ) =>{
        const body = {
            name:name,
            email:email,
            password:password
        }
        registerUser(body)
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleClick}>Register</button>
    </div>
  )
}

export default Signin


// "userbody":{
//     "name":"Mohan",
//     "email":"Mohan@gmail.com",
//     "Image":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5…",
//     "password":"Mohanpassword"
//     }