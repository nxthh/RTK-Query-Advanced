import React from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="bg-white dark:bg-zinc-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-zinc-500 dark:text-zinc-400 sm:text-xl">
            Got a technical issue? Want to send feedback about our products?
            Need details about our products? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="johndoe@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg shadow-sm border border-zinc-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            {/* <!-- Button Container --> */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              {/* <!-- Go Back Button (Left) --> */}
              <NavLink href="index" className="order-2 sm:order-1">
                <button
                  onClick={() => navigate(-1)}
                  type="button"
                  className="w-full sm:w-auto py-3 px-5 text-sm font-medium text-center text-zinc-900 bg-zinc-200 rounded-lg hover:bg-zinc-300 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:text-white dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800 transition-colors duration-200"
                >
                  ← Go Back
                </button>
              </NavLink>

              {/* <!-- Send Message Button (Right) --> */}
              <button
                type="submit"
                className="order-1 sm:order-2 w-full sm:w-auto py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-colors duration-200"
              >
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
