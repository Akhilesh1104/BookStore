import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-[2px] shadow-md p-5 rounded-lg w-[500px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* if there is a button in form, it will close the modal */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-4xl">Contact</h3>
          <br />
          <span className="text-xl"> Name</span>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              {...register("text", { required: true })}
              className="grow"
              placeholder="Name"
            />
            {errors.text && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>
          <br />
          <span className="text-xl"> E-mail</span>
          <br />
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              {...register("email", { required: true })}
              className="grow"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </label>
          <br />
          <span className="text-xl"> Message</span>
          <br />
          <textarea
            placeholder="Type your Message here..."
            className="textarea textarea-bordered textarea-lg w-full max-w-xs text-base"
            {...register("message", { required: true })}
          ></textarea>
          <br />
          <br />
          {errors.message && (
            <span className="text-red-500">This field is required</span>
          )}
          <div className="flex flex-row justify-between px-4">
            <br />
            <br />
            <br />
            <button className="btn btn-secondary mt-2">Submit</button>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
