import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDataContext } from "../DataContext";
import formatJson from "../utils/formatJson";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import useCookies from "../hooks/useCookies";
import Toast from "../components/controlInput/Toast";

const Recipe = () => {
  // Accessing data and functions from the global context and cookies.
  const { dataSummary } = useDataContext();
  const { getCookie } = useCookies();
  const apiUrl = process.env.REACT_APP_SERVER;
  const [showToast, setShowToast] = useState(false);

  // Function to add the recipe to the user's cart.
  const addToCart = async () => {
    // Retrieving authentication token and user email from cookies.
    const token = getCookie("token");
    const email = getCookie("email");

    // Configuration for the HTTP request.
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };

    // Data to be sent in the request.
    const requestData = {
      recipeId: dataSummary.id,
      recipeTitle: dataSummary.title,
      recipeImage: dataSummary.image,
    };

    try {
      // Sending a POST request to add the recipe to the cart.
      await axios.post(`${apiUrl}/users/${email}/recipes`, requestData, config);
      // Showing success toast message.
      setShowToast(true);
      // Hiding toast message after 3 seconds.
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <>
      <Navbar />
      {/* Rendering a toast message if showToast state is true */}
      <section className="w-full md:h-screen py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="flex items-center justify-center">
          <div className="container flex flex-col md:flex-row gap-8 px-4 md:px-6 items-center justify-center">
            {/* Rendering a card with recipe details */}
            <RecipeCard id={dataSummary.id} title={dataSummary.title} image={dataSummary.image} />
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-[#b85c2d]">{dataSummary.title}</h1>
              <p className="text-lg text-black font-poppins">{formatJson(dataSummary.summary)}</p>
              <button
                onClick={addToCart}
                className="w-full h-12 rounded-md bg-[#b85c2d] text-zinc-50 shadow-sm dark:text-zinc-50"
              >
                Add to Cart
              </button>
              {showToast && (
                <Toast
                  title={"Successfully added to cart"}
                  description={"The recipe has been successfully added to the cart"}
                  color={"border-[#88ad4c] bg-[#88ad4c]"}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe;
