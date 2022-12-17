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

  return (
    <>
      <TodoItemCreator />
      <UnorderedList>
        <TodoListStats />
        {todoList.map((item) => (
          <ListItem mb={4}>
            <TodoItem key={item.id} item={item} />
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

export default TodoList;