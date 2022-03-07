import { DataContext } from "../context";

const now = () => {
  const v = new Date();
  return (
    v.getHours() +
    ":" +
    v.getMinutes() +
    ":" +
    v.getSeconds() +
    "." +
    v.getMilliseconds()
  );
};

export const Text = () => {
  return (
    <DataContext.Consumer>
      {(ctx) => {
        return (
          <>
            <h1>
              {ctx.message != "" ? ctx.message : "hello"} - {ctx.count}
            </h1>
            <div>rendered : {now()}</div>
          </>
        );
      }}
    </DataContext.Consumer>
  );
};
