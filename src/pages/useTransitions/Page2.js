import React from "react";

const Page2 = () => {
  for (let i = 0; i < 10000000000; i++) {}

  return <h1>Expensive page</h1>;
};

export default React.memo(Page2);
