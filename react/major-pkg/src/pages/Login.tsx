import { useForm } from "react-hook-form";
import { useAppDispatch } from "../app/hooks";
import { useMutation } from "react-query";
import { login } from "../services/user";

type FormState = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const { mutate, isError } = useMutation(
    (state: FormState) => login(state.email, state.password),
    {
      onSuccess: (data: any) => {
        console.log(data); // { token: "foo" }
      },
    }
  );

  <>
    <form onSubmit={handleSubmit((values) => console.log(values))}>
      <div>
        <input
          placeholder="Email"
          {...register("email", { required: "required" })}
        />
        <span>{formState.errors.email && formState.errors.email.message}</span>
      </div>
      <div>
        <input
          placeholder="Password"
          {...register("password", { required: "required" })}
        />
        <span>
          {formState.errors.password && formState.errors.password.message}
        </span>
      </div>
      <input
        type="submit"
        value="Login"
        disabled={!formState.isDirty || !formState.isValid}
      />
    </form>
  </>;

  return (
    <>
      {isError && <>ログインできませんでした</>}
      <form onSubmit={handleSubmit((values) => mutate(values))}>・・・</form>
    </>
  );
};

export default Login;
