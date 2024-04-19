import { useQuery } from "@tanstack/react-query";

function ToDos() {
  const [page, setPage] = React.useState(0);
  const fetchToDos = (page = 0) =>
    fetch("https://jsonplaceholder.typicode.com/todos?page= " + page).then(
      (res) => res.json()
    );

  const { isPending, error, data, isPreviousData, isFetching } = useQuery({
    queryKey: ["todos", "page"],
    queryFn: () => fetchToDos(page),
    keepPreviousData: true,
  });
  return <h1>ToDos</h1>;
}

export default ToDos;
