import { useAtomValue } from "jotai";
import { userAtom } from "../Atoms";
const User = () => {
  const user = useAtomValue(userAtom);

  return (
    <div style={{ background: "green", color: "white" }}>
      <p>User</p>
      <p>name: {user.name} </p>
      <p>age: {user.age} </p>
    </div>
  );
};

export default User;
