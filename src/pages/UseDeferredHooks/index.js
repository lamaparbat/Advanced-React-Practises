const { useState, useEffect } = require("react");
const { default: Lists } = require("./LIsts");
import { comments } from "./constants";

const UseDeferredHooks = () => {
  const [searchKeyword, setSearchKeyword] = useState();

  useEffect(() => {}, [searchKeyword]);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };
  return (
    <>
      <input type="search" onChange={handleSearch} />
      <Lists comments={comments} />
    </>
  );
};

export default UseDeferredHooks;
