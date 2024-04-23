import React ,{useState,useEffect} from 'react'
import {IPosts } from '../models/IUsers';
import { PostService } from '../services/UserService';


interface IState{
    loading : boolean,
    posts:IPosts[],
    errorMsg :string
}


const Posts:React.FC = ()=>{
    const [state, setState] = useState<IState>({
        loading:false,
        posts:[] as IPosts[],
        errorMsg:''
    })
    useEffect(()=>{
        setState({...state,loading:true})
        PostService.getAllUsers()
        .then((res)=>
            setState({
                    ...state,loading:false , posts:res.data
            }))
        .catch(err=>setState({
            ...state,loading:false , errorMsg:err.message

        }))
        //eslint-disable-next-line
    },[])
    const {loading,posts,errorMsg} = state
    return(
        <>
        <div className="container"></div>
        {errorMsg && (<p>{errorMsg}</p>)}
        {loading && <h1>Loading...</h1>}
        <table className='table table-striped'>
            <thead>
                <tr>
                    <td>USerId</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                </tr>
            </thead>
            <tbody>{
                posts.length>0 && posts.map(post=>(
                    <tr key= {post.userId} > 
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))
                }</tbody>
        </table>
        </>
    )

}

export default Posts