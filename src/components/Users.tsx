import React ,{useState,useEffect} from 'react'
import { IUsers } from '../models/IUsers';
import { UserService } from '../services/UserService';
interface IState{
    loading : boolean,
    users:IUsers[],
    errorMsg :string
}

const Users:React.FC = ()=>{
    const [state, setState] = useState<IState>({
        loading:false,
        users:[] as IUsers[],
        errorMsg:''
    })

    //network Call

    useEffect(()=>{
        setState({...state,loading:true})
        UserService.getAllUsers()
        .then((res)=>
            setState({
                    ...state,loading:false , users:res.data
            }))
        .catch(err=>setState({
            ...state,loading:false , errorMsg:err.message

        }))
        //eslint-disable-next-line
    },[])
    const {loading,users,errorMsg} = state
    return(
        <>
        {errorMsg && (<p>{errorMsg}</p>)}
        {loading && <h1>Loading...</h1>}
        <table className='table table-striped'>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>WebSite</td>
                    <td>Company-Name</td>
                    <td>Company-Catch_Phrase</td>
                    <td>Company-bs</td>
                </tr>
            </thead>
            <tbody>{
                users.length>0 && users.map(user=>(
                    <tr key= {user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                        <td>{user.company.catchPhrase}</td>
                        <td>{user.company.bs}</td>
                    </tr>
                ))
                }</tbody>
        </table>

        </>
    )


}
export default Users
