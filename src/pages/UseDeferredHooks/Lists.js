const Lists = ({ comments }) => {
  return (
    <>
      {comments?.map((d, i) => {
        let count = 0;
        for (let i = 0; i < 100000; i++) {
          count += 1;
        }
        console.log(count);
        return <li key={i}>{d?.name}</li>;
      })}
    </>
  );
};

export default Lists;
