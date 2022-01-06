function ToDosIsr({ todos,now }) {
    return (
      <><b>{now}</b><ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul></>
    )
  }
  
  // This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await res.json()
    const now = Date.now()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        todos,
        now,
      },
      revalidate: 10
    }
  }

  export default ToDosIsr