import { useFetchData } from "../hooks/index";

const List = () => {
  const { data, isLoading, error } = useFetchData({
    url: "https://jsonplaceholder.typicode.com/todos",
  });

  return (
    <>
      {error && <p>{error.message}</p>}
      {data && data.map((d, i) => <p key={i}>{d.title}</p>)}
    </>
  );
};

export default List;
