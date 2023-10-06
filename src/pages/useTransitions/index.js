import { useState, useTransition } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const UseTransitionHooks = () => {
  const [openTab, setOpenTab] = useState(0);
  const [transition, setTransition] = useTransition();

  const handleTabChange = (id) => {
    setTransition(() => {
      setOpenTab(id);
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange(1)}>Non Expensive Page</button>
        <button onClick={() => handleTabChange(2)}>Expensive Page</button>
        <button onClick={() => handleTabChange(3)}>Fix Expensive Page</button>
      </div>

      {openTab === 1 && <Page1 />}
      {openTab === 2 && <Page2 />}
      {openTab === 3 && <Page3 />}
    </div>
  );
};

export default UseTransitionHooks;
