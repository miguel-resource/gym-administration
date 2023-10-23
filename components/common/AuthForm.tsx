import { Button } from "@mui/material";

type Props = {
  type: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: any;
};

const AuthForm = ({ type, onSubmit, error, handleOnChange }: Props) => {
  return (
    <div className="w-3/5 flex items-center justify-center">
      <div className="w-full">
        <form
          onSubmit={onSubmit}
          className="bg-white shadow-md rounded-xl p-10 mb-4 w-4/12 mx-auto"
        >
          <h1 className="text-2xl text-center font-bold mb-10">
            {type === "login" ? "Inicio de sesión" : "Register"}
          </h1>
          <div className="mb-4">
            <input
              onChange={handleOnChange}
              name="username"
              type="text"
              placeholder="Username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <input
              onChange={handleOnChange}
              name="password"
              type="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex mt-10 mx-auto">
            <Button
              className="block mx-auto bg-red-500 hover:scale-105 hover:bg-red-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              {type === "login" ? "Inicio de sesión" : "Register"}
            </Button>
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
