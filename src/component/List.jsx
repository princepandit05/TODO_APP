import React from 'react'

const List = ({item,deletList,index}) => {
    // console.log(elem);
    
  return (
    <div>
     <h3> {item.fullname}</h3>
      <h3> {item.email}</h3>
    <h3>{item.college}</h3>
    <button onClick={()=>deletList(index)}>Deletebtn</button>
    </div>
  )
}

export default List