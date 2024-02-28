import axios from "axios";
import { useState, useEffect } from "react";

export const useGetRequest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.spoonacular.com/recipes/random", {
          params: {
            apiKey: "bb071811bc5b4d329b8d3314402d8133", //0cb8ed10d8a143ff804704e59bbc867a //bb071811bc5b4d329b8d3314402d8133
            number: 4,
          },
        });
        setData(response.data.recipes);
        console.log(response.data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return data;
};
