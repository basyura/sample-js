import { useContext, memo } from "react";
import { DataContext } from "../context";

const addItem = (ctx) => {
  const items = [...ctx.items, ctx.items.length + 1];
  ctx.setItems(items);
};

export const SideBar = () => {
  const ctx = useContext(DataContext);

  console.log("sidebar");

  return (
    <div>
      <div>
        <button onClick={() => addItem(ctx)}>add</button>
      </div>
      <ul>
        {ctx.items.map((v) => {
          return <li key={v}>{v}</li>;
        })}
      </ul>
    </div>
  );
};
