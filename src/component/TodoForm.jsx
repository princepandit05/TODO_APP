import React, { useState } from 'react'

const TodoForm = ({Addlist}) => {
    const [formdata,setFormdat]=useState({
        fullname:'',
        email:'',
        college:'',
    })

    // console.log(formdata);
    
   const Handlechanges = (e)=>{
    const {name,value} = e.target
    setFormdat((prevdata)=>({
    ...prevdata,
    [name]:value
     }))
   }

   const HandleSubmit = (e)=>{
     e.preventDefault()
     Addlist(formdata)

     setFormdat({
        fullname:'',
        email:'',
        college:''
     })
   }
  return (
    <div>
        <h1>TodoForm</h1>
       <form onSubmit={HandleSubmit}>
         <input onChange={Handlechanges} required value={formdata.fullname} type="text" name="fullname" id="" placeholder='Enter your name' />
        <br />
        <br />
        <input onChange={Handlechanges} required value={formdata.email} type="Email" name="email" id="" placeholder='Enter your Email' />
        <br />
        <br />
        <input onChange={Handlechanges} required value={formdata.college} type="text" name="college" id="" placeholder='enter your College name'/>
        <br /><br />
        <button>Submit</button>
       </form>
        
    </div>
  )
}

export default TodoForm