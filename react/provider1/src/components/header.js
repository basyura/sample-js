import { useContext } from "react";
import { DataContext } from "../context";
export const Header = () => {
  const data = useContext(DataContext);
  return (
    <div>
      <h1>Title : {data.title}</h1>
    </div>
  );
};
