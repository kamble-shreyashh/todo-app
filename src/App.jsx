import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Stats } from './components/Stats';
import { ConfettiCelebration } from './components/ConfettiCelebration';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [error, setError] = useState('');

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    if (tasks.length > 0 && tasks.every(task => task.completed)) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [tasks]);

  const addTask = () => {
    if (!inputValue.trim()) {
      setError('Please enter a task first!');
      setTimeout(() => setError(''), 3000);
      return;
    }
    setTasks([...tasks, {
      id: Date.now(),
      text: inputValue,
      completed: false
    }]);
    setInputValue('');
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEdit = (task) => {
    setEditId(task.id);
    setEditValue(task.text);
  };

  const saveEdit = (id) => {
    if (!editValue.trim()) {
      setError('Task cannot be empty!');
      setTimeout(() => setError(''), 3000);
      return;
    }
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: editValue } : task
    ));
    setEditId(null);
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter') action();
  };

  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 text-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Header />
        <TaskForm 
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTask={addTask}
          error={error}
          handleKeyDown={handleKeyDown}
        />
        <TaskList
          tasks={tasks}
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
        {tasks.length > 0 && (
          <Stats remaining={remainingTasks} total={tasks.length} />
        )}
        <ConfettiCelebration show={showConfetti} />
      </div>
    </div>
  );
}

export default App;