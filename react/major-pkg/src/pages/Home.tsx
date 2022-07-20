import { useQuery } from "react-react-query";
import { fetchUsers } from "../services/user";
import { useAppDispatch } from "../app/hooks";
import { clearToken } from "../features/auth/authSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, data: users } = useQuery("users", fetchUsers);
  if (isLoading) return <>Loading</>;
  if (isError) return <>Error</>;
  return (
    <>
      <button onClick={(e) => dispatch(clearToken())}>Logout</button>
      <ul>
        {users?.map((user: any) => (
          <li key={user.id}>
            {user.id}:{user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
