import { Fragment, Suspense } from "react";
import List from "./component/List";

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<p>Loading....</p>}>
        <List />
      </Suspense>
    </Fragment>
  );
};

export default App;
