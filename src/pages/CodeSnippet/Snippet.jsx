import React, { useEffect } from "react";
import Prism from "prismjs";
import "./prism.css";

export default function Snippet({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="Code">
      <h2> Code Syntax Block {language}</h2>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
