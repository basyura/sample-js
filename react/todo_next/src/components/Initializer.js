import React, { useEffect } from "react";
import ToDoContainer from "../containers/ToDoContainer";

const Initialzier = () => {
  const container = ToDoContainer.useContainer();

  useEffect(() => {
    const f = async () => {
      await new Promise((r) =>
        setTimeout(() => {
          container.fetch();
        }, 1000)
      );
    };
    // initialize asynchronously
    if (!container.isInitialized) {
      container.setInitialized(true);
      f();
    }
  }, []);

  return <></>;
};

export default Initialzier;
