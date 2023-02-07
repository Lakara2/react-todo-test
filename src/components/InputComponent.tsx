import * as React from 'react';

export const InputComponent: React.FC<{
  AddOnTodo: (e:any) => any
}> = (props) => {
  const {AddOnTodo} = props;
  
  const [todo, setTodo] = React.useState("");

  const onTodo = (e:any):void => {
    if(e.target.id === "todo") {
        setTodo(e.target.value);
    }
  }

  const OnEnter=(e:any)=>{
    if(e.key==="Enter"){
      AddOnTodo(todo);
      setTodo("");
    }
  }
    return (
    <input type={"text"} className={"form-control mt-2 mb-2"}
     id="todo" value={todo} onChange={onTodo} onKeyDown={OnEnter}/>        
    )
}