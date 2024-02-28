import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";
import Discover from "../components/Discover";
import { useDataContext } from "../DataContext";
import { Loading } from "../components/controlInput/Loading";

const Home = () => {
  const [data, setData] = useState([]);
  const { dataSummary, updateDataSummary } = useDataContext();
  const [heroVisible, setHeroVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const shuffleData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://api.spoonacular.com/recipes/random", {
        params: {
          apiKey: process.env.SPOONACULAR_API,
          number: 4,
        },
      });
      if (response.status === 200) {
        setData(response.data.recipes);
        setHeroVisible(false);
        setLoading(false);
        console.log(response.data.recipes);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-neutral-900 min-h-screen flex flex-col pb-10 overflow-hidden">
        <div className="flex flex-col items-center justify-center lg:mt-12 px-4 lg:mb-20 mb-3">
          <button
            onClick={shuffleData}
            className="hover:scale-105 hover:duration-700 hover:ease-in-out rounded-xl border-2 text-xl border-white bg-neutral-900 w-full md:w-2/3 lg:w-1/2 py-3 my-5 text-center font-mono font-black uppercase text-white backdrop-blur transition-colors hover:bg-white hover:text-neutral-900"
          >
            Shuffle!
          </button>
          <div id="hero" className={`mt-20 flex-grow flex items-center justify-center ${heroVisible ? "" : "hidden"}`}>
            <div className="text-white text-xl lg:text-5xl">{<Discover />}</div>
          </div>
        </div>
        <div className="mx-auto w-full md:w-2/3 lg:w-4/5 flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              summary={item.summary}
              updateDataSummary={updateDataSummary}
            />
          ))}
          {loading && <Loading />}
        </div>
      </div>
    </>
  );
};

export default Home;
