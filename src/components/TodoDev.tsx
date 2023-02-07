//TP: UNIT TEST - STD21062
import '../bootstrap.css'
import '../App.css';
import { useState } from 'react';
import { Counter } from './Counter';
import { InputComponent } from './InputComponent';
export function TodoDev() {

  //const [todo, setTodo] = useState("");
  //list
  const [todoList, setTodoList] = useState([""]);
  const [todoDone, setTodoDone] = useState([""]);

  const AddOnTodo =(todo: string)=>{
    if(todo!==""){
      setTodoList([...todoList,todo])}
  }
/*
  const OnEnter=(e:any)=>{
    if(e.key==="Enter"){
      AddOnTodo(todo);
      setTodo("");
    }
  }

  const onTodo = (e:any):void => {
    if(e.target.id === "todo") {
        setTodo(e.target.value);
    }
  }*/
            /*<input type={"text"} className={"form-control mt-2 mb-2"}
             id="todo" value={todo} onChange={onTodo} onKeyDown={OnEnter}/>*/
  const onChecking=(index:number)=>{
    const item1=todoList[index];
    setTodoDone([...todoDone,item1]);
    todoList.splice(index, 1)
    setTodoList([...todoList])
  }

  return (
    <>
      <div className='container'> 
        <div className='row'>
  
          <div className='col-5 m-3 tests bg-primary1'> <h1 className="m-2">Todo</h1> 
          <InputComponent AddOnTodo={AddOnTodo}/>
            <div className='form-control' >
              <ul>
                {todoList.map((e,index)=>(
                <li key={index}>
                  {e}
              <input type="checkbox" id='checkbox' className='chek' checked={false}
              onChange={()=>onChecking(index)}/>
                </li>
                ))}
              </ul>
            </div>
          </div>
  
          <div className='col-5 m-3 tests bg-success1'> 
            <h1 className="m-2">Done </h1>
            <div>
                {todoDone.map((e,index)=>(
              <div key={index}>{e}
              </div>))}
            </div>
          </div>

          <Counter/>
          
        </div>
      </div>
    </>
    );
}