import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEyeSlash } from "react-icons/fa";
import { PiEye } from "react-icons/pi";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useUploadFileMutation } from "../../features/file/fileSlice";
import { useRegisterMutation } from "../../features/auth/authSlide";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const schema = z.object({
  name: z.string().nonempty("name is required").toLowerCase(),
  email: z.string().nonempty("email is required").email("Invalid email"),
  password: z.string().nonempty("password is required"),
  avatar: z
    .instanceof(File, "File is required")
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      `Max file size is ${MAX_FILE_SIZE / (1024 * 1024)}MB`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .png, and .webp formats are supported"
    )
});

export default function Register() {
  const [uploadFile] = useUploadFileMutation();
  const [registerUser] = useRegisterMutation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger, // Add trigger for manual validation
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      avatar: undefined // Change from "" to undefined
    },
    resolver: zodResolver(schema)
  });

  // Handle image change and preview
  const handelOnchangeImage = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      setImage(null);
      setPreview(null);
      setValue("avatar", undefined);
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setValue("avatar", file, { shouldValidate: true });

    // Manually trigger validation for the avatar field
    await trigger("avatar");
  };

  // Handle submit data to server
  const onSubmit = async (data) => {
    try {
      // Check if image exists
      if (!image) {
        toast.error("Please select an image");
        return;
      }

      // Submit file
      const formdata = new FormData();
      formdata.append("file", image);

      const res = await uploadFile(formdata).unwrap();

      const register = await registerUser({
        ...data,
        avatar: res?.location
      }).unwrap();

      console.log("res", register);
      toast.success("Registration successful!");

      // Clean up preview URL to prevent memory leaks
      if (preview) {
        URL.revokeObjectURL(preview);
      }

      reset();
      setImage(null);
      setPreview(null);
    } catch (e) {
      console.log(e);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <section className="bg-teal-600 w-[100%] h-screen">
      <div className="h-screen flex justify-center items-center mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-w-sm bg-white p-10 rounded-2xl gap-5"
        >
          <img
            src="/public/register.gif"
            alt="register-image"
            className="sm:hidden lg:flex w-1/2 object-contain"
          />
          <div className="flex flex-col gap-5 flex-grow-1">
            <h1 className="text-3xl text-center py-2 font-bold text-teal-600">
              Register
            </h1>

            {/* Preview profile */}
            {preview && (
              <div className="relative flex justify-center">
                <input
                  id="id-dropzone"
                  name="file-upload"
                  type="file"
                  // accept="image/jpeg,image/png,image/webp"
                  className="hidden absolute"
                  onChange={(e) => handelOnchangeImage(e)}
                />
                <label htmlFor="id-dropzone">
                  <img
                    src={preview}
                    alt="profile"
                    className="border cursor-pointer border-teal-600 w-[120px] h-[120px] rounded-full object-cover"
                  />
                </label>
              </div>
            )}

            {/* Upload profile */}
            {!preview && (
              <div className="flex flex-col items-center">
                <div className="relative flex justify-center">
                  <input
                    id="id-dropzone01"
                    name="file-upload"
                    type="file"
                    // accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(e) => handelOnchangeImage(e)}
                  />
                  <label
                    htmlFor="id-dropzone01" // Fixed: was "for" instead of "htmlFor"
                    className="relative w-[120px] h-[120px] flex cursor-pointer flex-col items-center gap-4 rounded-full border border-dashed border-slate-300 px-3 py-6 text-center text-sm font-medium transition-colors"
                  >
                    <span className="inline-flex h-12 items-center justify-center self-center rounded-full bg-slate-100/70 px-3 text-slate-400">
                      <IoCloudUploadOutline className="text-2xl" />
                    </span>
                    <span className="text-xs text-slate-500">
                      Drag & drop or
                      <span className="text-emerald-500"> upload a file</span>
                    </span>
                  </label>
                </div>
                {errors.avatar && (
                  <span className="text-red-600 text-center mt-2">
                    {errors.avatar.message}
                  </span>
                )}
              </div>
            )}

            {/* Show validation errors even when preview exists */}
            {preview && errors.avatar && (
              <span className="text-red-600 text-center">
                {errors.avatar.message}
              </span>
            )}

            {/* Name */}
            <div className="flex flex-col">
              <input
                {...register("name")}
                className="px-2.5 py-2.5 border border-slate-400 rounded-xl"
                placeholder="Enter name"
                type="text"
              />
              {errors.name && (
                <span className="text-red-600 mt-2">{errors.name.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <input
                {...register("email")}
                className="px-2.5 py-2.5 border border-slate-400 rounded-xl"
                placeholder="Enter email"
                type="email"
              />
              {errors.email && (
                <span className="text-red-600 mt-2">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col relative">
              <div
                onClick={() => setIsShowPassword(!isShowPassword)}
                className="absolute top-4 right-4 cursor-pointer"
              >
                {isShowPassword ? <PiEye /> : <FaRegEyeSlash />}
              </div>
              <input
                {...register("password")}
                className="px-2.5 py-2.5 border border-slate-400 rounded-xl"
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter Password"
              />
              {errors.password && (
                <span className="text-red-600 mt-2">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-teal-600 hover:bg-teal-700 px-5 py-2 rounded-xl text-white"
            >
              Register
            </button>

            <p className="text-center">
              Already have an account?
              <Link to={"/login"} className="text-blue-500 underline ml-1">
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
