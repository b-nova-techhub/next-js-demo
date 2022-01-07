function ToDosIsr({todos, now}) {
    return (
        <><b>{now}</b>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}

// This function gets called at build and request time
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
    const now = Date.now()
    return {
        props: {
            todos,
            now,
        },
        revalidate: 10
    }
}

export default ToDosIsr