function ToDos({ todos }) {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
          ))}
      </ul>
    )
  }
  
  // This function gets called at build time
export async function getServerSideProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        todos,
      },
    }
  }

  export default ToDos