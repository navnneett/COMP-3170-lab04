import { useState } from 'react';
import { Box, Heading, VStack, ChakraProvider } from '@chakra-ui/react';
import TaskForm from './components/TaskForm'; // Ensure this file is correctly implemented
import Task from './components/Task'; // Ensure this file is correctly implemented

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    if (!taskName) return; // Prevent adding empty tasks
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading mb={4}>Daily Planner {remainingTasks}</Heading>
        <TaskForm addTask={addTask} />
        <VStack spacing={3} mt={5}>
          {tasks.length > 0 && tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;

