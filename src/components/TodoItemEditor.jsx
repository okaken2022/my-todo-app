import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../components/atom';
import {
  Flex,
  Input,
  Button
} from '@chakra-ui/react'

import { CheckIcon } from '@chakra-ui/icons'

function TodoItemEditor() {
  const [title, setTitle] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: title,
        status: '未完了',
        date: startDate,
      },
    ]);
    setTitle('');
  };

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' mb={8} >
      <Input placeholder='Todoを追加'  value={title} onChange={handleChange}/>
      <Button colorScheme='green' onClick={addItem}><CheckIcon/></Button>
    </Flex>
  );
}

export default TodoItemEditor;

let id = 1;
function getId() {
  return id++;
}