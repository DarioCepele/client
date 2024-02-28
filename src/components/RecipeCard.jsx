import { motion } from "framer-motion";

const RecipeCard = ({ image }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 lg:h-[30rem] w-80 lg:w-[30rem] shrink-0 overflow-hidden rounded-xl p-8 shadow-lg"
    >
      <div className="absolute inset-0 z-10" />
      <img src={image} alt="" className="z-0 absolute top-0 left-0 w-full h-full object-cover" />
      <div className="relative z-10 text-white"></div>
    </motion.div>
  );
};

export default RecipeCard;
