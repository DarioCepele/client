import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Props received: id, title, image, summary, updateDataSummary, path
const Card = ({ id, title, image, summary, updateDataSummary, path }) => {
  // Function to handle click events on the card
  const handleClick = () => {
    // Checking if 'summary' is defined
    if (summary) {
      // Updating summary data if 'summary' is defined
      updateDataSummary({
        id,
        title,
        image,
        summary,
      });
    }
  };

  return (
    // Linking to the specified path
    <Link to={path}>
      {/* Animated div using Framer Motion */}
      <motion.div
        // Applying animation while hovering
        whileHover="hover"
        onClick={handleClick} // Calling handleClick function on click
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        // Variants for animation
        variants={{
          hover: {
            scale: 1.05,
          },
        }}
        className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8"
      >
        {/* Overlay to darken the image */}
        <div className="absolute inset-0 z-10 bg-black opacity-30" />
        {/* Image */}
        <img src={image} alt="" className="z-0 absolute top-0 left-0 w-full h-full object-cover" />
        {/* Content */}
        <div className="relative z-10 text-white">
          {/* ID display */}
          <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
            {id}
          </span>
          {/* Title */}
          <motion.span
            initial={{ scale: 0.85 }}
            variants={{
              hover: {
                scale: 1,
              },
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            className="my-2 block origin-top-left font-mono text-4xl font-black "
          >
            {title}
            <br />
          </motion.span>
        </div>
        {/* Button */}
        <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-[#b85c2d] bg-[#b85c2d] py-2 text-center font-mono font-black uppercase text-white backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
          Get it now
        </button>
      </motion.div>
    </Link>
  );
};

export default Card;
