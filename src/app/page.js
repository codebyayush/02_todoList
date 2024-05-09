'use client'
import TodoForm from "@/components/todo-form/TodoForm";


const postTodo = async (taskObj) => {
    const resp = await fetch("http://localhost:3000/api/tasklist", {
      method: "POST",
      body: JSON.stringify(taskObj),
      headers: {"Content-Type": 'application/json'}
    })

    if(resp.ok){ 
        const data = await resp.json();
        console.log('posted ', data);
    }else{
        const error = await resp.json();
        console.log('error', error);
    }
}

export default function Home() {
  const bgUrl = 'https://source.unsplash.com/pcpsVsyFp_s';

  return (
    <>  
        <div style={{backgroundImage: `url(${bgUrl})`, backgroundSize: 'cover'}} className="h-screen">
            <TodoForm addTask={postTodo}/>
        </div>
    </>
  );
}
