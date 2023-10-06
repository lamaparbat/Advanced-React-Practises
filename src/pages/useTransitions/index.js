import { useState, useTransition } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const UseTransitionHooks = () => {
  const [openTab, setOpenTab] = useState(null);
  const [pending, setTransition] = useTransition();

  const handleTabChange = (id) => {
    setTransition(() => {
      setOpenTab(id);
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange("page1")}>
          Non Expensive Page
        </button>
        <button onClick={() => handleTabChange("page2")}>Expensive Page</button>
        <button onClick={() => handleTabChange("page3")}>
          Fix Expensive Page
        </button>
      </div>

      {openTab === "page1" && <Page1 />}
      {openTab === "page2" && <Page2 />}
      {openTab === "page3" && <Page3 />}
    </div>
  );
};

export default UseTransitionHooks;
