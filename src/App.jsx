//import { useState, useEffect } from "react";
//import { userData } from "./utils/data.js";
//import axios from "axios";
import "./App.css";
//import useSWR from "swr";
import Comments from "./Comments";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Comments />
    </QueryClientProvider>
  );
}

export default App;

/* function App() {
  // swr
  //const key = "https://jsonplaceholder.typicode.com/comments";
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  //const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/comments`,
    fetcher
  );

  if (error) return <div>failed to load data</div>;
  if (isLoading) return <div>Loading comments...</div>;

  return (
    <div>
      <h2 className="title">Comments</h2>
      <ol>
        {data.map((comment) => (
          <li key={comment.id} classNa>
            <strong>{comment.name}</strong>
            <p>{comment.body}</p>
          </li>
        ))}
      </ol>
    </div>
  ); */

/* return (
    <>
      <div>
        <h1>App Componment</h1>
        <h2>{userData.name}</h2>
        <ul>
          {userData.blogPosts.map((item) => (
            <li key={item.id}>
              {item.title} {item.content}
            </li>
          ))}
        </ul>
      </div>
    </>
  ); 
}*/
