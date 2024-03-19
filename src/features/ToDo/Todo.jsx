import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addNewTodo, deleteTodo } from "./ToDoSlice";


const Todo = () => {
    const { todos } = useSelector((state)=> state.todo);
    const [ input, setInput ] = useState();
    const dispatch = useDispatch();
  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 my-3">
                    <div className="card">
                        <div className="card-header text-center"><h3>Our Todos</h3></div>
                        <div className="card-body">
                            <ul className="list-group">
                                { todos.length > 0 ? todos.map((item, index) => {
                                    return (
                                        <li key={index} className="list-group-item d-flex justify-content-between"> {item} <button onClick={() => dispatch(deleteTodo(item))} className="btn btn-sm btn-danger"><i className='bx bxs-trash'></i></button> </li>
                                    );
                                }) : "No todos found" }                                
                            </ul>
                        </div>
                        <div className="card-footer">
                            <div className="my-2 d-flex">
                                <input value={input} onChange={(e) => setInput(e.target.value)} className="form-control" placeholder="Do" type="text" />&nbsp;
                                <button onClick={() => dispatch(addNewTodo(input))} className="btn btn-sm btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo