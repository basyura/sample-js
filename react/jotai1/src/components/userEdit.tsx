import { useAtom } from "jotai";
import { ChangeEvent } from "react";
import { userAtom } from "../Atoms";

const UserEdit = () => {
  const [user, setUser] = useAtom(userAtom);
  const handleName = (evnt: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, name: evnt.target.value }));
  };
  const handleAge = (evnt: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, age: parseInt(evnt.target.value, 10) }));
  };

  return (
    <div style={{ background: "darkgreen", color: "white" }}>
      UserEdit
      <table>
        <tbody>
          <tr>
            <td>name : </td>
            <td>
              <input
                type="text"
                defaultValue={user.name}
                onChange={(evnt: ChangeEvent<HTMLInputElement>) =>
                  handleName(evnt)
                }
              />
            </td>
          </tr>
          <tr>
            <td>age : </td>
            <td>
              <input
                type="text"
                defaultValue={user.age}
                onChange={(evnt: ChangeEvent<HTMLInputElement>) => {
                  handleAge(evnt);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserEdit;
