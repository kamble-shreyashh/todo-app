import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.h1 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-300"
    >
      <span className='text-8xl'>DO</span><h1 className='font-mono' >it Now</h1>
    </motion.h1>
  );
};