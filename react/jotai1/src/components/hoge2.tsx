import Hoge3 from "./hoge3";
import { countAtom } from "../Atoms";
import { useAtomValue } from "jotai";

const Hoge2 = () => {
  console.log("Hoge2");
  const count = useAtomValue(countAtom);
  return (
    <div style={{ background: "blue", color: "white" }}>
      Hoge2 - {count}
      <Hoge3 />
    </div>
  );
};

export default Hoge2;
