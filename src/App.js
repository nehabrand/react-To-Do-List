
import { useState } from 'react';
import './App.css';




function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editInput, setEditInput] = useState("");
  const [editTodos, setEditTodos] = useState(null);


const addHandler = (e) => {
e.preventDefault();
  const newTodo = {
    id:new Date().getTime(),
    text:input
  }
  setTodos([...todos].concat(newTodo));
  setInput("");
  console.log(newTodo);

}

const deleteHandler =(id) => {
  const deleteTodo = [...todos].filter((todo)=> todo.id !== id);
  setTodos(deleteTodo);
console.log(deleteTodo);

}
const saveHandler=(id)=>{
const saveTodo = [...todos].map((item)=>{
  if(item.id === id)
  {
    item.text=editInput
  }
  return item ;

})
setTodos(saveTodo);
setEditInput("");
setEditTodos(null)
console.log(saveTodo);


}

  return (
    <div className="App">
     
<h1 id='heading'> My TO DO List </h1>
<input   type='text' onChange={(e)=> setInput(e.target.value)} ></input>
 
<button className="button" onClick={addHandler} > ADD </button>


{todos.map((item)=>(
<div key={item.id}>
{editTodos === item.id ? (
  <input type='text' onChange={(e)=>setEditInput(e.target.value)}></input>
):(
  <div>{item.text}</div>
)}
  <div>
  <button id='btn' onClick={()=> deleteHandler(item.id)}>Delete</button>
  <button id='buttn' onClick={()=> setEditTodos(item.id)}> Edit</button>
{editTodos ? (
  <button id='Sbtn' onClick={()=> saveHandler(item.id)}>Save</button>
): (
  ""
  )}
  </div>

</div>
))}



    </div>
  );
}

export default App;
