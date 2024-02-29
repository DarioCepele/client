import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center bg-zinc-900 md:h-screen lg:h-screen">
        <p className="my-5 px-2 lg:px-36 block origin-top-left font-mono text-5xl font-black text-white">TastyHub</p>
        <div className="lg:my-20 my-10 lg:mx-20 mx-4 px-2 lg:px-36 block origin-top-left font-mono text-2xl font-black text-white">
          <p>
            Welcome to my recipe site, a combination of culinary passion and technological efficiency. With a
            interactive front-end in React, I offer you an engaging visual experience. Thanks to the integration with
            the Spoonaculare API, access a wide range of high-quality recipes.
          </p>
          <br />
          <p>
            State management is optimized via React's Context, ensuring smooth navigation. On the On the backend side, a
            robust Express.js server ensures efficient communication with the database.
          </p>
          <br />
          <p>
            Security is priority with an encrypted recording system, allowing you to manage your own profile securely.
            The reliable database is implemented on MongoDB Atlas, ensuring performance high.
          </p>
          <br />
          <p>Simple, safe and delicious. Welcome to the world of digital recipes!</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
