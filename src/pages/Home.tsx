/** @format */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Logo from '../assets/icon/logo.svg';
import Banner from '../assets/img/main-banner.png';
import Wrapper from '../partials/Wrapper';

const Home = () => {
  const MotionLink = motion(Link);

  return (
    <Wrapper>
      <div className="flex flex-col items-center">
        <motion.img
          src={Logo}
          className="border h-46 rounded-full"
          alt="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="font-secondary text-4xl mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Pose & Poise
        </motion.h1>
        <motion.h2
          className="font-primary text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Align Your Mind, Define Your Style
        </motion.h2>
      </div>

      <MotionLink
        to="/quiz"
        className="space-y-4 block mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="font-primary text-2xl">What Sport Are You</h2>
        <img src={Banner} className="w-full" alt="banner" />
      </MotionLink>

      <motion.div
        className="mt-20 h-[1px] bg-black"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.6, delay: 1.0 }}
      ></motion.div>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <h2 className="font-primary text-2xl">More Info!</h2>
        <motion.div
          className="bg-[#8e959e] font-primary text-4xl h-32 ml-10 pt-4 pl-4"
          whileHover={{ scale: 1.02 }}
        >
          Coming Soon
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};

export default Home;
