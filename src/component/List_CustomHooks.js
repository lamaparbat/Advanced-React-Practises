import { useFetchData } from "../hooks/index";

const ListCustomHooks = () => {
  // using custom hooks
  const { data, isLoading, error } = useFetchData({
    url: `${process.env.REACT_APP_BASE_URL}/todos`,
  });

  return (
    <>
      {error && <p>{error.message}</p>}
      {data && data.map((d, i) => <p key={i}>{d.title}</p>)}
    </>
  );
};

export default ListCustomHooks;
