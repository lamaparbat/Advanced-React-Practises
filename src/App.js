import { Fragment, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ListReactQuery from "./component/List_ReactQuery";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Fragment>
      <Suspense fallback={<p>Loading....</p>}>
        <QueryClientProvider client={queryClient}>
          <ListReactQuery />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </Fragment>
  );
};

export default App;
