import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../components/atom';
import {
  Flex,
  Input,
  Button
} from '@chakra-ui/react'

function TodoItemCreator ({todoList}) {
  const [title, setTitle] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title)
  };

// Todo追加
  const addItem = () => {
    // フォームが空の場合追加しない
    if (title === '')return;

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: todoList.length + 1,
        title: title,
        status: '未完了',
        date: startDate,
      },
    ]);
    setTitle('');
  };

// Enter押下で追加
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') 
    addItem()
  }

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' mb={8} >
      <Input placeholder='Todoを追加' value={title} onChange={handleChange} onKeyDown={handleKeyDown} />
      <Button colorScheme='blue' onClick={addItem} >追加</Button>
    </Flex>
  );
}

export default TodoItemCreator;

