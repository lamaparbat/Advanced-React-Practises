import { users } from "./data";

const WithoutLibrary = () => {
  const onDownload = () => {};

  return (
    <>
      <button onClick={onDownload}>Download PDF Without Library</button>
    </>
  );
};

export default WithoutLibrary;
