import { AnimatePresence } from 'framer-motion';
import { TaskItem } from './TaskItem';

export const TaskList = ({ 
  tasks, 
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
  return (
    <ul className="mb-6">
      <AnimatePresence>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
            editId={editId}
            setEditId={setEditId}
            editValue={editValue}
            setEditValue={setEditValue}
            saveEdit={saveEdit}
            handleKeyDown={handleKeyDown}
            startEdit={startEdit}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};