import { createContext,useContext } from "react"


export const TodoContext=createContext({
todos:[
{
    id:1,
    todo:"msg",
    checked:false
}
],
addTodo:(todo)=>{},
update:(id,todo)=>{},
removeTodo:(id)=>{},
toggleComplete:(id)=>{}
})


export const useTodo =()=>{
return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider;

                                                                            