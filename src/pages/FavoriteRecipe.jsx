import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import formatJson from "../utils/formatJson";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import useCookies from "../hooks/useCookies";
import Toast from "../components/controlInput/Toast";
import { Loading } from "../components/controlInput/Loading";

const FavoriteRecipe = () => {
  // Destructure the id parameter from the URL using the useParams() hook
  const { id } = useParams();
  const { getCookie } = useCookies();
  const [recipe, setRecipe] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_SERVER;

  // Fetch recipe data from Spoonacular API when the component mounts or when the id changes
  useEffect(() => {
    const getRecipe = async () => {
      try {
        // Make a GET request to the Spoonacular API to fetch recipe information based on the id
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
          params: {
            apiKey: process.env.REACT_APP_SPOONACULAR,
          },
        });
        // Update the recipe state with the fetched data
        setRecipe(response.data);
      } catch (error) {
        // Log an error message if there's an error during the request
        console.error("Error fetching recipe:", error);
      }
    };

    // Call the getRecipe function
    getRecipe();
  }, [id]); // Dependency array containing the id variable

  // Function to remove the recipe from the cart
  const removeFromCart = async () => {
    // Get token and email from cookies
    const token = getCookie("token");
    const email = getCookie("email");

    // Define configuration for the request headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };

    try {
      // Make a DELETE request to remove the recipe from the user's favorites
      await axios.delete(`${apiUrl}/users/${email}/favorites/${id}`, config);
      // Show a success toast message and navigate to the favorites page after 3 seconds
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate("/favorites");
      }, 3000);
    } catch (error) {
      // Log an error message if there's an error during the request
      console.error("Error removing from cart:", error);
    }
  };

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      <section className="w-full md:h-screen py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="flex items-center justify-center">
          <div className="container flex flex-col md:flex-row gap-8 px-4 md:px-6 items-center justify-center">
            {/* Render RecipeCard component with recipe data if available */}
            {recipe && <RecipeCard id={id} title={recipe.title} image={recipe.image} />}
            <div className="space-y-6">
              {recipe && ( // Conditionally render recipe details if recipe is available
                <>
                  <h1 className="text-4xl font-bold tracking-tighter text-[#b85c2d]">{recipe.title}</h1>
                  <p className="text-lg text-black font-poppins">{formatJson(recipe.summary)}</p>
                  {/* Button to remove recipe from cart */}
                  <button
                    onClick={removeFromCart}
                    className="w-full h-12 rounded-md bg-[#b85c2d] text-zinc-50 shadow-sm dark:text-zinc-50"
                  >
                    Remove from Cart
                  </button>
                  {showToast && (
                    <Toast
                      title={"Successfully removed from cart"}
                      description={"The recipe has been successfully removed from cart"}
                      color={"border-[#e45d5c] bg-[#e45d5c]"}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FavoriteRecipe;
