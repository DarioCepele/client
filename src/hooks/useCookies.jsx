import { useCookies as useReactCookies } from "react-cookie";

// Defining a custom hook named useCookies
const useCookies = () => {
  // Destructuring the returned values from useReactCookies hook
  const [cookies, setCookie, removeCookie] = useReactCookies();

  // Defining a function to get a specific cookie by its name
  const getCookie = (name) => cookies[name];

  // Defining a function to set a custom cookie with a name, value, and options
  const setCustomCookie = (name, value, options) => {
    setCookie(name, value, options);
  };

  // Defining a function to remove a custom cookie by its name and options
  const removeCustomCookie = (name, options) => {
    removeCookie(name, options);
  };

  // Returning an object containing the cookies state and the custom cookie-related functions
  return {
    cookies,
    getCookie,
    setCustomCookie,
    removeCustomCookie,
  };
};

export default useCookies;
