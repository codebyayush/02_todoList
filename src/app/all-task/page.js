import React from "react";
import AllTask from "@/components/all-task/AllTask";
import { notFound } from "next/navigation";

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
  const alltask = await fetchTask();
  const bgUrl = 'https://source.unsplash.com/pcpsVsyFp_s';

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgUrl})`, backgroundSize: "cover" }}
        className="h-screen"
      >
        <AllTask tasks={alltask} />
      </div>
    </>
  );
};

export default page;
