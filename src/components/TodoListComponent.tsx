import { useState } from "react";

export const TodoListComponent: React.FC<{
}> = (props) => {
  const [todoList,setTodoList] = useState([""]);
  const [todoDone, setTodoDone] = useState([""]);
  
  const onChecking=(index:number)=>{
    const item1=todoList[index];
    setTodoDone([...todoDone,item1]);
    todoList.splice(index, 1)
    setTodoList([...todoList])
  }
return (
    <div className='form-control' >
      <ul>
        {todoList.map((e,index)=>(
        <li key={index}>
          {e}
      <input type="checkbox" id='checkbox' className='chek' checked={false} 
      onChange={()=> onChecking(index)}/>
        </li>
        ))}
      </ul>
    </div>)
}