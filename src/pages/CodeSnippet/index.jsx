import Snippet from "./Snippet.jsx";

const CodeSnippet = () => {
  const jsCode = `
   const fullName = "Parbat Lama";
    
   console.log(fullName);
  `;

  return (
    <>
      <Snippet code={jsCode} language="javascript" />
    </>
  );
};

export default CodeSnippet;
