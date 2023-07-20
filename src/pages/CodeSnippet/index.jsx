const CodeSnippet = () => {
  const html = Prism.highlight(
    "const a = 1;",
    Prism.languages.javascript,
    "javascript"
  );
  return html;
};

export default CodeSnippet;
