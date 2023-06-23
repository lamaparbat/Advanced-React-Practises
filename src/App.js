import { useFetchData } from "./hooks/index";

const App = () => {
  const { data, isLoading, error } = useFetchData({
    url: "https://jsonplaceholder.typicode.com/todos"
  });

  return (
    <div>
      {isLoading && <p>Loading....</p>}
      {error && <p>{error.message}</p>}
      {data && data.map((d, i) => <p key={i}>{d.title}</p>)}
    </div>
  );
};

export default App;
