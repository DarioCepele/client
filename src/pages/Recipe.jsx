import React from "react";
import Navbar from "../components/Navbar";
import { useDataContext } from "../DataContext";
import formatJson from "../utils/formatJson";
import RecipeCard from "../components/RecipeCard";

const Recipe = () => {
  const { dataSummary } = useDataContext();

  return (
    <>
      <Navbar />
      <div className="grid lg:gap-5 lg:grid-cols-3 py-5 px-2 lg:h-screen bg-zinc-900">
        <div className="flex justify-center items-center">
          <RecipeCard id={dataSummary.id} title={dataSummary.title} image={dataSummary.image} />
        </div>
        <div className="lg:col-span-2 flex flex-col lg:justify-center lg:items-center text-white relative">
          <h1 className="lg:absolute lg:top-32 my-2 block origin-top-left font-mono text-4xl lg:text-6xl font-black">
            {dataSummary.title}
          </h1>
          <h1 className="my-2 px-2 lg:px-36 block origin-top-left font-mono text-xl font-black">
            {formatJson(dataSummary.summary)}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Recipe;
