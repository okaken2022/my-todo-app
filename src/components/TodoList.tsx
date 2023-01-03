import { useState,  useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  ListItem,
  UnorderedList,
  Text,
  Select,
  Flex
} from '@chakra-ui/react'
import { todoListState } from '../components/atom'
import { todoIsEditable, filteredTodos } from '../components/atom';
import TodoListStats from '../components/TodoListStats'
import TodoItemCreator from '../components/TodoItemCreator';
import TodoItem from './TodoItem';
import TodoItemEditor from './TodoItemEditor';
import TodoFilter from './TodoFilter';

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const isEditable = useRecoilValue(todoIsEditable);
  const filtered = useRecoilValue(filteredTodos);
  return (
    <>
      {isEditable ? (
      <TodoItemEditor todoList={todoList} />

      ) : (
      <>
        <TodoItemCreator todoList={todoList} />
        <TodoFilter />
        <UnorderedList listStyleType={'none'}>
          <TodoListStats />
          {filtered.map((item, index) => (
            <ListItem key={index} mb={4}>
              <TodoItem item={item} />
            </ListItem>
          ))}
        </UnorderedList>
      </>
      )}
    </>
  );
}

export default TodoList;