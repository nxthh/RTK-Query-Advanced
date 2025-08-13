import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";
import { useUploadFileMutation } from "../../features/file/fileSlice";
import { useRegisterMutation } from "../../features/auth/authSlide";
import { FaRegEyeSlash } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { Button, Label, TextInput, FileInput } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";

const schema = z.object({
  name: z.string().nonempty("Name is required").toLowerCase(),
  email: z.string().nonempty("Email is required").email("Invalid email"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(4, "Password must be equal or greater than 4 characters"),
  avatar: z.any(),
});

export default function Register2() {
  const [uploadFile] = useUploadFileMutation();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   name: "John Doe",
    //   email: "johndoe@mail.com",
    //   password: "",
    //   avatar: "",
    // },
    resolver: zodResolver(schema),
  });

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue("avatar", e.target.files);
    } else {
      setPreview(null);
      setValue("avatar", null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setValue("avatar", files);
      handleImagePreview({ target: { files } });
    }
  };

  const onSubmit = async (data) => {
    try {
      let avatarUrl = "https://api.lorem.space/image/face?w=640&h=480";

      if (data.avatar && data.avatar[0]) {
        const formData = new FormData();
        formData.append("file", data.avatar[0]);
        const fileRes = await uploadFile(formData).unwrap();
        if (fileRes?.location) {
          avatarUrl = fileRes.location;
        } else {
          console.warn("File upload failed, using default avatar");
        }
      }

      const submitData = {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: avatarUrl,
      };

      const result = await registerUser(submitData).unwrap();
      if (result) {
        toast.success("Registration successful! Please log in.");
        navigate("/login");
      }
    } catch (e) {
      const errorMessage = e?.data?.message || e?.message || "Registration failed.";
      toast.error(errorMessage);
      console.error("Registration Error:", e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-zinc-50">
          Register Account
        </h2>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name">Your Name</Label>
          </div>
          <TextInput
            {...register("name")}
            id="name"
            type="text"
            placeholder="Enter name"
            className="[&>input]:bg-white [&>input]:dark:bg-zinc-800 [&>input]:placeholder-gray-400 [&>input]:dark:placeholder-gray-300 [&>input]:border-gray-300 [&>input]:dark:border-zinc-600 [&>input]:rounded-xl"
          />
          {errors.name && (
            <p className="text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Your Email</Label>
          </div>
          <TextInput
            {...register("email")}
            id="email"
            type="email"
            placeholder="email"
            className="[&>input]:bg-white [&>input]:dark:bg-zinc-800 [&>input]:placeholder-gray-400 [&>input]:dark:placeholder-gray-300 [&>input]:border-gray-300 [&>input]:dark:border-zinc-600 [&>input]:rounded-xl"
          />
          {errors.email && (
            <p className="text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password">Your Password</Label>
          </div>
          <div className="relative">
            <TextInput
              {...register("password")}
              id="password"
              type={isShowPassword ? "text" : "password"}
              placeholder="Password"
              className="[&>input]:bg-white [&>input]:dark:bg-zinc-800 [&>input]:placeholder-gray-400 [&>input]:dark:placeholder-gray-300 [&>input]:border-gray-300 [&>input]:dark:border-zinc-600 [&>input]:rounded-xl [&>input]:pr-10"
            />
            <div
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-zinc-500 dark:text-zinc-400"
            >
              {isShowPassword ? <PiEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          {errors.password && (
            <p className="text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="dropzone-file">Profile Picture</Label>
          </div>
          <div
            className={`flex items-center justify-center w-full h-32 ${
              isDragOver ? "border-blue-500" : "border-gray-300"
            } border-2 border-dashed rounded-lg cursor-pointer bg-white dark:bg-zinc-800 dark:border-zinc-600 dark:hover:border-zinc-500 dark:hover:bg-zinc-700 hover:bg-gray-100`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="h-full w-full object-cover rounded-lg"
              />
            ) : (
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-full p-4"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L7 9m3-3 3 3"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <FileInput
                  {...register("avatar")}
                  onChange={handleImagePreview}
                  id="dropzone-file"
                  className="hidden"
                  accept="image/*"
                />
              </label>
            )}
          </div>
          {errors.avatar && (
            <p className="text-sm mt-1">{errors.avatar.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full mt-2">
          {isLoading ? "Registering..." : "Register new account"}
        </Button>
        <Button
          className="w-full mt-2"
          type="button"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
} 