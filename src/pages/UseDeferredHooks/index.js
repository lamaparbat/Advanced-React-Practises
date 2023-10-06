import Lists from "./Lists";
import { useHandler } from "./useHandler";

const UseDeferredHooks = () => {
  const { commentLists, searchKeyword, handleSearch } = useHandler();

  return (
    <>
      <input type="search" value={searchKeyword} onChange={handleSearch} />
      <Lists comments={commentLists} />
    </>
  );
};

export default UseDeferredHooks;
