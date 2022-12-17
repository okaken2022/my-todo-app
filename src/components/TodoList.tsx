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
  const deleteItem = () => {
    const index = todoList.findIndex((listItem) => listItem.id === item.id);
    const newTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
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
                <Button onClick={deleteItem}  colorScheme='teal'>編集</Button>
                <Button colorScheme='red'>削除</Button>
              </ButtonGroup>
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

export default TodoList;