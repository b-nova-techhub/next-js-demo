function ToDos({todos}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}

// This function gets called at request time
export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
    return {
        props: {
            todos,
        },
    }
}

export default ToDos