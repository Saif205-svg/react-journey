// export default function ToDo({task}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

export default function ToDo({task,isDone}){
        if(isDone === true){
            return <li>Done: {task}</li>
        } else{
            return <li>Not Done: {task}</li>
        }
}