import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, image, summary, updateDataSummary }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    updateDataSummary({
      id,
      title,
      image,
      summary,
    });
    navigate(`recipe/${id}`);
  };

  return (
    <motion.div
      whileHover="hover"
      onClick={handleClick}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8"
    >
      <div className="absolute inset-0 z-10 bg-black opacity-30" />
      <img src={image} alt="" className="z-0 absolute top-0 left-0 w-full h-full object-cover" />
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          {id}
        </span>
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
          className="my-2 block origin-top-left font-mono text-4xl font-black"
        >
          {title}
          <br />
        </motion.span>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Get it now
      </button>
    </motion.div>
  );
};

export default Card;
