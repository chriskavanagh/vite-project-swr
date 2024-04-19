import { useQuery } from "@tanstack/react-query";

function Comments() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
        res.json()
      ),
  });

  if (isPending) return <h1>Loading. . .</h1>;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2 className="title">Comments</h2>
      <ol>
        {data.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>
            <p>{comment.body}.</p>
          </li>
        ))}
      </ol>
    </div>
  );
} //end

export default Comments;
