import { useState } from 'react';
import { Box, Heading, VStack, ChakraProvider, Button, HStack } from '@chakra-ui/react'; // Ensure HStack and Button are imported
import TaskForm from './components/TaskForm'; 
import Task from './components/Task'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading mb={6} size="2xl">Daily Planner</Heading> 
        <Heading mb={4}>Remaining Tasks to Complete: {remainingTasks}</Heading>

        {/* Filter Buttons */}
        <HStack mb={4}>
          <Button onClick={() => setFilter("All")} colorScheme={filter === "All" ? "yellow" : "gray"}>
            All
          </Button>
          <Button onClick={() => setFilter("Completed")} colorScheme={filter === "Completed" ? "blue" : "gray"}>
            Completed
          </Button>
          <Button onClick={() => setFilter("Pending")} colorScheme={filter === "Pending" ? "blue" : "gray"}>
            Pending
          </Button>
        </HStack>

        <TaskForm addTask={addTask} />
        
        <VStack spacing={3} mt={5}>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            ))
          ) : (
            <Heading size="sm" color="gray.500">No tasks available</Heading>
          )}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
