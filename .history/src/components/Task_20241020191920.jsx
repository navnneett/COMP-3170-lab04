import { HStack, Checkbox, Text, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function Task({ task, toggleTask, deleteTask }) {
  return (
    <HStack spacing={4}>
      <Checkbox 
        isChecked={task.completed} 
        onChange={() => toggleTask(task.id)}
      />
      <Text as={task.completed ? 's' : ''}>{task.name}</Text>
      <IconButton 
        aria-label="Delete Task" 
        icon={<DeleteIcon />} 
        onClick={() => deleteTask(task.id)} 
        colorScheme="red"
      />
    </HStack>
  );
}

export default Task;
