const Lists = ({ comments }) => {
  return (
    <>
      {comments?.map((d, i) => {
        return <li key={i}>{d?.name}</li>;
      })}
    </>
  );
};

export default Lists;
