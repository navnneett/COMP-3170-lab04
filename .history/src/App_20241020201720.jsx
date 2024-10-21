import { useState } from 'react';
import { Box, Heading, VStack, ChakraProvider } from '@chakra-ui/react';
import TaskForm from './components/TaskForm'; 
import Task from './components/Task'; 

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    if (!taskName) return; 
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
      <Heading mb={4} size="lg">Daily Planner</Heading>
        <TaskForm addTask={addTask} />
        <VStack spacing={3} mt={5}>
          {tasks.length > 0 &&
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            ))}
        </VStack>
        <Heading mb={6}>Remaining Tasks to Complete: {remainingTasks}</Heading>

      </Box>
    </ChakraProvider>
  );
}

export default App;
