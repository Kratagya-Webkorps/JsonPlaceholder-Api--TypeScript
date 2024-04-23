import React, { useState, useEffect } from 'react'
import { ITodos } from '../models/IUsers';
import { TodoService } from '../services/UserService';

interface IState {
    loading: boolean,
    todos: ITodos[],
    errorMsg: string
}

const Todos: React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        todos: [] as ITodos[],
        errorMsg: ''
    })
    useEffect(() => {
        setState({ ...state, loading: true })
        TodoService.getAllUsers()
            .then((res) =>
                setState({
                    ...state, loading: false, todos: res.data
                }))
            .catch(err => setState({
                ...state, loading: false, errorMsg: err.message

            }))
        //eslint-disable-next-line
    }, [])
    const { loading, todos, errorMsg } = state
    
    return (
        <>
            {errorMsg && (<p>{errorMsg}</p>)}
            {loading && <h1>Loading...</h1>}
            { todos.length>0 && todos.map(todo=> (
                <table className='table '>
                <thead className="thead-dark">
                    <tr>
                        <th scope='col'>UserID</th>
                        <th scope='col'>ID</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Task-Completed</th>
                        
                    </tr>
                </thead>
                <tbody>{
                    todos.length>0 && todos.map(todo=>(
                        <tr key= {todo.userId}>
                            <td>{todo.userId}</td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed?'Yes':"No"}</td>
                            
                        </tr>
                    ))
                    }</tbody>
            </table>
             ))}

        </>
    )
}
export default Todos
