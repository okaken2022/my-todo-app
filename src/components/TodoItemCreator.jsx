import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../components/atom';
import {
  Flex,
  Input,
  Button
} from '@chakra-ui/react'

function TodoItemCreator() {
  const [title, setTitle] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: title,
        isComplete: false,
      },
    ]);
    setTitle('');
  };

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' mb={8} >
      <Input placeholder='Todoを追加'  value={title} onChange={handleChange}/>
      <Button colorScheme='blue' onClick={addItem}>追加</Button>
    </Flex>
  );
}

export default TodoItemCreator;

let id = 1;
function getId() {
  return id++;
}