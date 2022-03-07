import { useContext } from "react";
import { DataContext } from "../context";

export const ListItem = () => {
  const data = useContext(DataContext);
  return (
    <ul>
      <li>{data.listItem}</li>
    </ul>
  );
};
