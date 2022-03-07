import { useContext, useEffect } from "react";
import { Text } from "./text";
import { DataContext } from "../context";

const updateCount = (ctx) => {
  ctx.setCount(ctx.count + 1);
};

const updateMessage = (ctx, e) => {
  ctx.setMessage(e.srcElement.value);
};

export const Body = () => {
  const ctx = useContext(DataContext);

  useEffect(() => {
    document.getElementById("messageText").addEventListener("keyup", (e) => {
      updateMessage(ctx, e);
    });
  }, []);

  return (
    <>
      <Text />
      <div>
        <button onClick={() => updateCount(ctx)}>{ctx.count}</button>
        <input type="text" id="messageText" placeholder="message" />
      </div>
    </>
  );
};
