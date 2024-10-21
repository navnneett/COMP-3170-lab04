import { useState } from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName);
    setTaskName(''); // Reset input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add a new task"
          required
        />
        <Button type="submit" colorScheme="teal">
          Add Task
        </Button>
      </HStack>
    </form>
  );
}

export default TaskForm;
