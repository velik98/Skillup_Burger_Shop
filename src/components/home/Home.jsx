/*import React  from "react";

const Home = () => {
    <div>
        
    </div>
}

export default Home */

import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
import Header from "../layout/Header";
import { Link } from "react-router-dom";

const options = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};
const Home = () => {
  return (
    <>
      <section class="home">
        <motion.div initial={options.initial} whileInView={options.whileInView}>
          <h1>Burger Shop</h1>
          <p>Give yourself a tasty burger.</p>
        </motion.div>
        <motion.a
          href="#menu"
          initial={options.initial}
          whileInView={options.whileInView}
        >
          Explore menu
        </motion.a>
      </section>
      <Menu />
      <Founder />
    </>
  );
};

export default Home;
