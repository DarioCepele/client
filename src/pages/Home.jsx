import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
import { useDataContext } from "../DataContext";
import { Loading } from "../components/controlInput/Loading";
import { Helmet } from "react-helmet";

const Home = () => {
  const [data, setData] = useState([]); // Initialize data state as an empty array
  const { dataSummary, updateDataSummary } = useDataContext(); // Destructure dataSummary and updateDataSummary from custom hook useDataContext
  const [heroVisible, setHeroVisible] = useState(true); // Initialize heroVisible state as true
  const [loading, setLoading] = useState(false); // Initialize loading state as false

  const shuffleData = async () => {
    try {
      setLoading(true); // Set loading state to true
      // Make an HTTP GET request using axios library to fetch random recipes
      const response = await axios.get(process.env.REACT_APP_SPOONACULAR_RANDOM, {
        params: {
          apiKey: process.env.REACT_APP_SPOONACULAR,
          number: 4,
        },
      });
      // Check if response status is 200 (OK)
      if (response.status === 200) {
        // If successful, update data state with fetched recipes
        setData(response.data.recipes);
        setHeroVisible(false); // Hide hero section
        setLoading(false); // Set loading state to false
        console.log(response.data.recipes); // Log fetched recipes to console
      }
    } catch (error) {
      console.error("Error fetching data:", error); // Log error if fetching data fails
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TastyHub</title>
      </Helmet>
      <Navbar />
      <div className="bg-[#F5F5F5] min-h-screen flex flex-col pb-10 overflow-hidden">
        <div className="flex flex-col items-center justify-center lg:mt-12 px-4 lg:mb-20 mb-3">
          {/* Render a button to trigger shuffleData function */}
          <button
            onClick={shuffleData}
            className="hover:duration-500 hover:ease-ease-in-out rounded-xl text-xl bg-[#b85c2d] w-full md:w-2/3 lg:w-1/2 py-3 my-5 text-center font-mono font-black uppercase text-white backdrop-blur transition-colors hover:bg-neutral-800"
          >
            Shuffle!
          </button>
          {/* Render hero section */}
          <div
            id="hero"
            className={`mt-20 flex-grow flex items-center justify-center ${heroVisible ? "" : "hidden"}`}
          ></div>
        </div>
        {/* Render cards for each recipe in the data array */}
        <div className="mx-auto w-full md:w-2/3 lg:w-4/5 flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              summary={item.summary}
              updateDataSummary={updateDataSummary}
              path={`/recipe/${item.id}`}
            />
          ))}
          {/* Render loading spinner if data is being fetched */}
          {loading && <Loading />}
        </div>
      </div>
    </>
  );
};

export default Home;
