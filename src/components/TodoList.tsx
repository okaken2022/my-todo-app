import { useRecoilState } from 'recoil';
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { todoListState } from '../components/atom'
import TodoListStats from '../components/TodoListStats'
import TodoItemCreator from '../components/TodoItemCreator';
import TodoItem from './TodoItem';

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  console.log(todoList);
  todoList.shift();
  console.log(todoList);
  
  return (
    <>
      <TodoItemCreator />
      <UnorderedList>
        <TodoListStats />
        {todoList.map((item, index) => (
          <ListItem key={index} mb={4}>
            <TodoItem item={item} />
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

export default TodoList;