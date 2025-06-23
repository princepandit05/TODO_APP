import React, { useState } from 'react'
import TodoForm from './TodoForm'
import List from './List';

const TodoApp = () => {
    const [Listdata,setlistdata] = useState([])
   console.log(Listdata);
   
    const Addlist = (text)=>{
        setlistdata([...Listdata,text])
    }

    const deletList = (key)=>{
        const newList = [...Listdata]
        newList.splice(key,1)
        setlistdata(newList)
    }
  return (
    <div className='bg-black text'>
        <h1>TodoApp</h1>

       <TodoForm Addlist={Addlist}/>

       <h1>ListData</h1>
       {
      
        Listdata.map((item,idx)=>(
          <>
          <List item={item} key={idx} index={idx} deletList={deletList}/>
          </>
        )
        )
        
       }
    </div>
  )
}

export default TodoApp