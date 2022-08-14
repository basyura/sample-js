import { countAtom } from "../Atoms";
import { useAtom } from "jotai";

const Fuga = () => {
  console.log("Fuga");

  const [count, setCount] = useAtom(countAtom);

  const invokeFuga = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={invokeFuga}>Fuga {count}</button>
    </div>
  );
};

export default Fuga;
