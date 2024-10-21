import { useState } from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName(''); // Clear input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input 
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="New Task"
        />
        <Button type="submit" colorScheme="blue">
          Add Task
        </Button>
      </HStack>
    </form>
  );
}

export default TaskForm;
