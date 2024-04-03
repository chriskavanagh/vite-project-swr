import { useState, useEffect } from "react";
import { userData } from "./utils/data.js";
import axios from "axios";
import "./App.css";
import useSWR from "swr";

function App() {
  // swr
  //const key = "https://jsonplaceholder.typicode.com/comments";
  //const fetcher = (key) => axios.get(key).then((res) => res.data);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/comments`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h2>Comments: </h2>
      <ol>
        {data.map((comment) => (
          <li key={comment.id} classNa>
            <strong>{comment.name}</strong>
            <p style={{ marginBottom: "4rem" }}>{comment.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );

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
  ); */
}

export default App;
