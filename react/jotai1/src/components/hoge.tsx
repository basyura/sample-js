import Hoge2 from "./hoge2";

const Hoge = () => {
  console.log("Hoge");
  return (
    <div style={{ background: "red" }}>
      Hoge
      <Hoge2 />
    </div>
  );
};

export default Hoge;
