import React from "react";
import { NavLink } from "react-router";

export default function About() {
  return (
    <main className="pt-16">
      {/* <!-- HERO SECTION --> */}
      <section className="bg-white dark:bg-zinc-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-8 md:p-12 mb-8">
            <h1 className="text-zinc-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              About Ace Shop
            </h1>
            <p className="text-lg font-normal text-zinc-500 dark:text-zinc-400 mb-6">
              Your trusted partner in cutting-edge technology solutions since
              2015
            </p>
          </div>
        </div>
      </section>

      {/* <!-- OUR STORY SECTION --> */}
      <section className="bg-white dark:bg-zinc-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
                Our Story
              </h2>
              <p className="mb-6 font-light text-zinc-500 md:text-lg dark:text-zinc-400">
                Founded in 2015, Ace Shop began as a small startup with a big
                vision: to make cutting-edge technology accessible to everyone.
                What started as a passion project in a garage has grown into a
                trusted technology retailer serving customers worldwide.
              </p>
              <p className="mb-6 font-light text-zinc-500 md:text-lg dark:text-zinc-400">
                We believe that technology should enhance lives, not complicate
                them. That's why we carefully curate our product selection,
                ensuring every item meets our high standards for quality,
                innovation, and value.
              </p>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-8 text-center">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-500">
                    50K+
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Happy Customers
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-500">
                    1000+
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">Products</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-500">
                    8
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-500">
                    24/7
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- MISSION & VALUES SECTION --> */}
      <section className="bg-zinc-50 dark:bg-zinc-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
              Our Mission & Values
            </h2>
            <p className="font-light text-zinc-500 lg:mb-16 sm:text-xl dark:text-zinc-400">
              We're driven by core values that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* <!-- Innovation --> */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 text-center border border-zinc-200 dark:border-zinc-700">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 mx-auto">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Innovation
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                We stay ahead of technology trends to bring you the latest and
                greatest products that push boundaries.
              </p>
            </div>

            {/* <!-- Quality --> */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 text-center border border-zinc-200 dark:border-zinc-700">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 mx-auto">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Quality
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Every product is carefully tested and vetted to ensure it meets
                our rigorous standards for performance and reliability.
              </p>
            </div>

            {/* <!-- Customer First --> */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 text-center border border-zinc-200 dark:border-zinc-700">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 mx-auto">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Customer First
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Your satisfaction is our priority. We provide exceptional
                support and service every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- WHY CHOOSE US SECTION --> */}
      <section className="bg-zinc-50 dark:bg-zinc-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-zinc-900 dark:text-white">
              Why Choose Ace Shop?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <!-- Feature 1 --> */}
            <div className="text-center">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 mx-auto">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 00-1-1H4a1 1 0 00-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-10 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold dark:text-white">
                Fast Shipping
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Free shipping on orders over $50 with express delivery options
                available.
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="text-center">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 mx-auto">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold dark:text-white">
                Warranty Protection
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Comprehensive warranty coverage and protection plans for peace
                of mind.
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="text-center">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 mx-auto">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold dark:text-white">
                Expert Support
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                24/7 technical support from our team of certified technology
                experts.
              </p>
            </div>

            {/* <!-- Feature 4 --> */}
            <div className="text-center">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 mx-auto">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold dark:text-white">
                Best Prices
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Competitive pricing with price matching guarantee on identical
                products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA SECTION --> */}
      <section className="bg-white dark:bg-zinc-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-8 md:p-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-4xl dark:text-white">
              Ready to Experience Ace Shop?
            </h2>
            <p className="mb-6 text-lg font-normal text-zinc-500 dark:text-zinc-400">
              Join thousands of satisfied customers who trust Ace Shop for their
              technology needs.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
              <NavLink
                to="/products"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Shop Now
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-zinc-900 rounded-lg border border-zinc-300 hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-100 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
