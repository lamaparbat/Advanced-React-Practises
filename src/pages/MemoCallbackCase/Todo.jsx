import {memo} from "react"

const Todo = ({todo, addTodo}) => {
    console.log("re-render todo")
    return (
        <div>
            {
                todo.map((d,i) => {
                    return <li key={i}>{d}</li>
                })
            }
            <button onClick={addTodo}>Update Todo</button>
        </div>
    )
}

export default memo(Todo);