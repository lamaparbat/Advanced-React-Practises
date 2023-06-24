import { useQuery } from "react-query";
import { getTodos } from "../services/api/todoServices";

const ListReactQuery = () => {
  const { data, isLoading, error } = useQuery(["todos"], getTodos, {
    staleTime: 6000,
  });

  return (
    <>
      {error && <p>{error.message}</p>}
      {isLoading && <p>Fetching....</p>}
      {!isLoading && data && data.map((d, i) => <p key={i}>{d.title}</p>)}
    </>
  );
};

export default ListReactQuery;
