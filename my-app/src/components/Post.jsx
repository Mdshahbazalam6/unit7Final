import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Post = () => {

    const [data,setData] = useState([])

    async function getData (){
        try {
            let res = await fetch ('http://localhost:3000/posts')
            let dat = await res.json()
            // console.log(data)

            setData(dat.data)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(data)
    useEffect(()=>{
        getData()
    },[])
  return (
   <>
   {
    data.map((ele)=>{
        console.log(ele)
        return(
            <>
            <p>{ele.title}</p>
            <p>{ele.content}</p>
            </>
        )
    })
   }
   </>
  )
}

export default Post