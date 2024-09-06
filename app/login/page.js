"use client";
import { useRouter, redirect } from "next/navigation";
import { doCredentialLogin, doGoogleLogin } from "../actions";
import { signIn } from "../auth";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";


const Root = styled("div")(({ theme }) => ({
  width: "100%",
}));

const Login = () => {
  
  
  const session = useSession()
  const router = useRouter();
  const [error, setError] = useState();

  if(session.status === "authenticated") redirect("/")


  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await doCredentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {

        window.location.reload();
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      setError("Check your Credentials");
    }
  }
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center bg-gray-50 py-6">
      <div className="lg:h-[70vh]  lg:w-[40vw] md:[w-40vw] w-[80vw]  bg-white  rounded-md shadow-lg flex flex-col items-center p-4 pt-8 gap-2 my-6">
        <p className="text-xl font-semibold text-gray-800 tracking-wide">
          Sign into <span className="text-blue-400">Discount</span>  store
        </p>
        <p className="text-gray-500 text-sm">Please Sign in to continue</p>

        <form action={doGoogleLogin}>
          <div className="w-72 lg:w-80 mt-4 flex items-center justify-center ">
            <button
              type="submit"
              name="action"
              value="google"
              className="group flex items-center justify-center text-gray-500 w-full border p-2 rounded-lg text-md hover:bg-blue-500/80 font-semibold transition duration-200 hover:text-white"
            >
              <FaGoogle  className="text-md text-blue-400 mx-2 group-hover:text-white"  />
              {/* <GoogleIcon/>  */}
              Continue
              with Google
            </button>
          </div>
        </form>

        <Root>
          {" "}
          <Divider textAlign="center" className="my-4 text-gray-600">
            or
          </Divider>
        </Root>

        {error && <p className="text-red-500 text-sm w-96 text-center font-semibold bg-red-500/20 p-2 rounded-lg">{error}</p>}

        <form onSubmit={handleSubmitForm} className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-2">
            <div>
              <label className="text-gray-500" htmlFor="Email ">
                Email address
              </label>
            </div>

            <div className="w-72 lg:w-96 border rounded-md">
              {" "}
              <input
                className="outline-none w-full p-2"
                type="email"
                name="email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <label className="text-gray-500" htmlFor="Password ">
                Password
              </label>
            </div>

            <div className="w-72 lg:w-96 border rounded-md">
              <input
                className="outline-none w-full p-2"
                type="password"
                name="password"
              />
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <button
              type="submit"
              className=" group gap-3 mt-6 w-72 lg:w-96 border rounded-md p-2 bg-gray-100 text-gray-600 hover:bg-blue-400 hover:text-white transition ease-in"
            >
              Continue{" "}
              {/* <ArrowRightAltIcon className="text-gray-500 mx-1 group-hover:translate-x-1 transition duration-150 group-hover:text-white" /> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
