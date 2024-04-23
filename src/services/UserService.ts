import axios from "axios"

export class UserService{
    private static URL:string = "https://jsonplaceholder.typicode.com"
    public static getAllUsers(){
        let placeHolder:string ='users' 
        let userURL:string = `${this.URL}/${placeHolder}` 
        return axios.get(userURL)
    }
}

export class PostService{
    private static URL:string = "https://jsonplaceholder.typicode.com"
    public static getAllUsers(){
        let placeHolder:string ='posts' 
        let userURL:string = `${this.URL}/${placeHolder}` 
        return axios.get(userURL)
    }
}
export class PhotoService{
    private static URL:string = "https://jsonplaceholder.typicode.com"
    public static getAllUsers(){
        let placeHolder:string ='photos' 
        let userURL:string = `${this.URL}/${placeHolder}` 
        return axios.get(userURL)
    }
}

export class TodoService{
    private static URL:string = "https://jsonplaceholder.typicode.com"
    public static getAllUsers(){
        let placeHolder:string ='todos' 
        let userURL:string = `${this.URL}/${placeHolder}` 
        return axios.get(userURL)
    }
}