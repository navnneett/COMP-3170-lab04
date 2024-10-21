import { useState } from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <HStack as="form" onSubmit={handleSubmit}>
      <Input 
        placeholder="Enter task name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
      />
      <Button type="submit" colorScheme="blue">Add Task</Button>
    </HStack>
  );
}

export default TaskForm;
