import { useState } from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import TaskForm from './TaskForm';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <Box p={5}>
      <Heading mb={4}>Remaining Tasks to Complete: {remainingTasks}</Heading>
      <TaskForm addTask={addTask} />
      <VStack spacing={3} mt={5}>
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
            deleteTask={deleteTask}
          />
        ))}
      </VStack>
    </Box>
  );
}

export default App;
