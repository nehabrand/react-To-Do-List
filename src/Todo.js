import React, { useState } from "react";


function Todo(){
const[item, setItem]=useState()
const[list,setList]=useState([])
function itemInsert(e){
    setItem(e.target.value)
}
function itemClick(old){
setList(old.target.value)
}
    return(
<div>
    <input type="text" onChange={itemInsert}></input>
    <button onClick={itemClick}  style={}>Add</button>

<ol>
    {
    list.map((itemList)=>{
        return <li>{itemList}</li>
    })
}
    
</ol>

</div>

    )
}

export default Todo