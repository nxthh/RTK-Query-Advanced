import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../features/auth/authSlide";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEyeSlash } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { Button, Label, TextInput } from "flowbite-react";
import { useLoginWithGoogle } from "../../components/social-auth/GogoleAuthComponent";
import { useLoginWithGitHub } from "../../components/social-auth/GithubAuthComponent";
import { useLoginWithFacebook } from "../../components/social-auth/FacebookAuthComponent";
import GoogleLogo from "../../assets/social-media/google.png";
import GithubLogo from "../../assets/social-media/github.png";
import FacebookLogo from "../../assets/social-media/facebook.png";

const schema = z.object({
  email: z.string().nonempty("Email is required").email(),
  password: z.string().nonempty("Password is required"),
});

export default function Login() {
  const { loginWithGoogle, googleLogout } = useLoginWithGoogle();
  const { loginWithGitHub, gitHubLogout } = useLoginWithGitHub();
  const { loginWithFacebook, facebookLogout } = useLoginWithFacebook();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      let result = await login(data).unwrap();
      if (result) {
        navigate("/");
      }
    } catch (errors) {
      toast.error(errors?.data?.message);
      console.log("ERROR: ", errors?.data?.message);
    } finally {
      reset();
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="h-screen flex justify-center items-center mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full sm:max-w-md md:max-w-lg bg-white dark:bg-zinc-800 p-10 rounded-2xl shadow-lg"
        >
          <h1 className="text-3xl text-center py-2 font-bold dark:text-zinc-50">
            Login
          </h1>
          <div className="flex flex-col">
            <div className="mb-2 block ">
              <Label htmlFor="email">Email</Label>
            </div>
            <TextInput
              {...register("email")}
              id="email"
              type="text"
              placeholder="email"
              
            />
            {errors.email && (
              <span className="text-sm mt-2">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col relative">
            <div
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="absolute top-4 right-4"
            >
              {isShowPassword ? <PiEye /> : <FaRegEyeSlash />}
            </div>
            <TextInput
              {...register("password")}
              id="password"
              type={isShowPassword ? "text" : "password"}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-sm mt-2">{errors.password.message}</span>
            )}
          </div>
          <Button type="submit" className="w-full mt-2">
            {isLoading ? "Loading..." : "Login"}
          </Button>
          <p className="text-center dark:text-zinc-200">
            Don't have any account?{" "}
            <a href="/register" className="underline text-primary-500">
              Register
            </a>
          </p>
          <div className="my-4 flex items-center justify-center">
            <hr className="flex-grow border-t dark:text-zinc-400" />
            <span className="mx-4 text-sm dark:text-zinc-200">OR</span>
            <hr className="flex-grow border-t dark:text-zinc-400" />
          </div>
          <div className="flex gap-2 items-center w-full justify-center">
            <Button
              type="button"
              onClick={loginWithGoogle}
              className="p-0 border-none bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent"
            >
              <img
                src={GoogleLogo}
                alt="Google provider"
                width={35}
                height={35}
              />
            </Button>
            <Button
              type="button"
              onClick={loginWithFacebook}
              className="p-0 border-none bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent"
            >
              <img
                src={FacebookLogo}
                alt="Facebook provider"
                width={30}
                height={30}
              />
            </Button>
            <Button
              type="button"
              onClick={loginWithGitHub}
              className="p-0 border-none bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent"
            >
              <img
                src={GithubLogo}
                alt="GitHub provider"
                width={30}
                height={30}
              />
            </Button>
          </div>
          <div className="flex gap-2 items-center w-full justify-center mt-2">
            <Button type="button" onClick={googleLogout} className="p-2">
              Logout with Google
            </Button>
            <Button type="button" onClick={facebookLogout} className="p-2">
              Logout with Facebook
            </Button>
            <Button type="button" onClick={gitHubLogout} className="p-2">
              Logout with GitHub
            </Button>
          </div>
          <Button
            className="w-full mt-2 bg-zinc-400 dark:bg-zinc-700"
            type="button"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
}
