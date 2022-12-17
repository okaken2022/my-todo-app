import { useRecoilState } from 'recoil';
import {
  ListItem,
  UnorderedList,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
} from '@chakra-ui/react'
import { todoListState } from '../components/atom'
import TodoListStats from '../components/TodoListStats'
import TodoItemCreator from '../components/TodoItemCreator';
import TodoItem from './TodoItem';

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const handleDeleteTodo = (targetTodo: any) => {
    setTodoList(todoList.filter((item) => item.id !== targetTodo.id));
    };
  return (
    <>
      <TodoItemCreator />
      <UnorderedList>
        <TodoListStats />
        {todoList.map((item) => (
          <ListItem mb={4}>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
              <Box p='2'>
                <TodoItem key={item.id} item={item} />
              </Box>
              <Spacer />
              <ButtonGroup gap='2'>
                <Button colorScheme='teal'>編集</Button>
                <Button onClick={handleDeleteTodo}   colorScheme='red'>削除</Button>
              </ButtonGroup>
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

export default TodoList;