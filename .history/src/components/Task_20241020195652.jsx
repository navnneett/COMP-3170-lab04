import { Checkbox, Button, HStack, Text } from '@chakra-ui/react';

function Task({ task, toggleTask, deleteTask }) {
  return (
    <HStack spacing={4} w="100%" justifyContent="space-between">
      <Checkbox isChecked={task.completed} onChange={() => toggleTask(task.id)}>
        <Text as={task.completed ? 'del' : undefined}>{task.name}</Text>
      </Checkbox>
      <Button size="sm" colorScheme="red" onClick={() => deleteTask(task.id)}>
        Delete
      </Button>
    </HStack>
  );
}

export default Task;

