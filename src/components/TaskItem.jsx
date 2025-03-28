import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

export const TaskItem = ({ 
  task, 
  completeTask, 
  deleteTask, 
  editId, 
  setEditId, 
  editValue, 
  setEditValue, 
  saveEdit, 
  handleKeyDown,
  startEdit 
}) => {
  const isEditing = editId === task.id;
  
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className={`mb-2 rounded-lg overflow-hidden ${task.completed ? 'opacity-60' : 'opacity-100'}`}
    >
      <div className="bg-white/10 hover:bg-white/20 transition-all duration-200 p-4">
        <AnimatePresence mode="wait">
          {isEditing ? (
            <motion.div
              key={`edit-${task.id}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, () => saveEdit(task.id))}
                className="flex-1 bg-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                autoFocus
              />
              <button
                onClick={() => saveEdit(task.id)}
                className="bg-cyan-400 hover:bg-cyan-300 text-purple-900 px-3 py-2 rounded-lg"
              >
                Save
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={`view-${task.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3 flex-1">
                <button
                  onClick={() => completeTask(task.id)}
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${task.completed ? 'bg-green-400' : 'border-2 border-white/30'}`}
                >
                  {task.completed && <CheckIcon className="h-4 w-4 text-white" />}
                </button>
                <span className={`flex-1 ${task.completed ? 'line-through text-white/70' : ''}`}>
                  {task.text}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(task)}
                  className="p-1 text-white/70 hover:text-white transition-colors"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-1 text-white/70 hover:text-red-300 transition-colors"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};