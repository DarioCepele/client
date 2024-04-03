import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import useCookies from "../hooks/useCookies";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Loading } from "../components/controlInput/Loading";
import { useDataContext } from "../DataContext";

const Favorites = () => {
  // State variables for loading state, recipes data, and data summary
  const [loading, setLoading] = useState(false);
  const { getCookie } = useCookies(); // Custom hook to get cookies
  const [recipes, setRecipes] = useState(null);
  const apiUrl = process.env.REACT_APP_SERVER;
  const { dataSummary, updateDataSummary } = useDataContext(); // Custom hook for data context

  // Fetch favorite recipes on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getCookie("token"); // Get token from cookie
        const email = getCookie("email"); // Get email from cookie
        setLoading(true);

        // Check if token and email are available
        if (token && email) {
          // Fetch favorite recipes from API
          const response = await axios.get(`${apiUrl}/users/${email}/favorites`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          });
          // If request is successful, update state with recipes data
          if (response.status === 200) {
            setRecipes(response.data.recipes);
            setLoading(false); // Set loading to false
            console.log(response.data.recipes); // Log recipes data
          }
        }
      } catch (error) {
        console.error("Error while fetching favorites:", error); // Log error if fetching fails
      }
    };

    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array to run only once on initial mount

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TastyHub</title>
      </Helmet>
      <Navbar />
      <div className="bg-[#F5F5F5] min-h-screen p-10">
        <div className="mx-auto w-full md:w-2/3 lg:w-4/5 flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          {/* Map through recipes and render Card component for each */}
          {recipes &&
            recipes.map((item) => (
              <Card
                key={item._id}
                id={item.recipeId}
                title={item.recipeTitle}
                image={item.recipeImage}
                summary={item.summary}
                updateDataSummary={updateDataSummary}
                path={`/favorite/${item.recipeId}`}
              />
            ))}
          {/* Render loading spinner if loading state is true */}
          {loading && <Loading />}
        </div>
      </div>
    </>
  );
};

export default Favorites;
