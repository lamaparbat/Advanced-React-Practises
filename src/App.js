import { Fragment, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ListReactQuery from "./component/List_ReactQuery";
import Counter from "./pages/MemoCallbackCase";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Fragment>
      <Suspense fallback={<p>Loading....</p>}>
        <h1>******** ----- useMemo & useCallback----- *******</h1>
        <Counter />

        <h1>****** ----- ReactQuery ()----- *****</h1>
        <QueryClientProvider client={queryClient}>
          <ListReactQuery />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </Fragment>
  );
};

export default App;
