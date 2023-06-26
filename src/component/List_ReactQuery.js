import { useQuery } from "react-query";
import { getTodos } from "../services/api/todoServices";

const ListReactQuery = () => {
  const { data, isLoading, error } = useQuery(["todos"], getTodos, {
    staleTime: 6000, // remain data stale for 6 seconds
    retry: 10, // Will retry failed requests 10 times before displaying an error
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
