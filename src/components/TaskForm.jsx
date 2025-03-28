import { PlusIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

export const TaskForm = ({ 
  inputValue, 
  setInputValue, 
  addTask, 
  error,
  handleKeyDown 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl mb-8"
    >
      <div className="flex gap-2 mb-1">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="I Will . . ."
          className="flex-1 bg-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-300 placeholder-white/70"
        />
        <button
          onClick={addTask}
          className="bg-cyan-400 hover:bg-cyan-300 text-purple-900 font-bold px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-1"
        >
          <PlusIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-red-300 text-sm mt-2"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};