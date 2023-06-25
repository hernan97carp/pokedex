import { Link } from "react-router-dom";
import "./landingPage.css";
import { motion } from "framer-motion";

export default function LandingPage() {
  const button = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const text = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 120,
        delay: 1,
      },
    },
  };

  return (
    <>
      <div className="conteiner">
        <div className="landingConteiner">
          <motion.div
            className="textConteiner"
            initial="hidden"
            animate="visible"
            variants={text}
          >
            <h3 className="landingText">Hello Everyone</h3>
          </motion.div>

          <Link to="/home">
            <motion.button
              className="ov-btn-grow-box"
              initial="hidden"
              animate="visible"
              variants={button}
            >
              ready? So, let's get started.
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
}
