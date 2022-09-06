const Todo = (props) => {
    const todoClasses = [];
    if (props.todo.complete){
      todoClasses.push("line-through");
    }
    return (
<div key={props.index} >
        <input onChange = {(event) => {
        props.handleToggleComplete(props.index);
        } }
        checked = {props.todo.complete} type ="checkbox"/>
        <span className={todoClasses.join(" ")} >{props.todo.text}</span>
        <button onClick = {(event) => {
        props.handleTodoDelete(props.index);
        }}
        style = {{marginLeft: "10px"}}
        >Delete</button>
        </div>
    )
}

export default Todo
