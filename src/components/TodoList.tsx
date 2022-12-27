import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  ListItem,
  UnorderedList,
  Button
} from '@chakra-ui/react'
import { todoListState } from '../components/atom'
import { todoIsEditable } from '../components/atom';
import TodoListStats from '../components/TodoListStats'
import TodoItemCreator from '../components/TodoItemCreator';
import TodoItem from './TodoItem';
import TodoItemEditor from './TodoItemEditor';

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const isEditable = useRecoilValue(todoIsEditable);
  console.log(isEditable);
  return (
    <>
      {isEditable ? (<TodoItemEditor todoList={todoList} />) : (<TodoItemCreator todoList={todoList} />)}
      <UnorderedList listStyleType={'none'}>
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