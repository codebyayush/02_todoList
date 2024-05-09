import Completed from '@/components/completed-task/Completed';
import { notFound } from 'next/navigation';
import React from 'react'


const fetchTask = async () => {
    const resp = await fetch("http://localhost:3000/api/tasklist", {
      cache: "no-store",
    });

    const data = await resp.json();

    if (resp.ok) {
      return data;
    } else {
      return notFound();
    }
  };

const page = async () => {
    const tasks = await fetchTask();
  return (
    <>
        <Completed tasks={tasks}/>
    </>
  )
}

export default page;