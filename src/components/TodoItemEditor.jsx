import { useState } from 'react';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, todoIsEditable, todoEditId } from '../components/atom';
import {
  Flex,
  Input,
  Button
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

function TodoItemEditor({todoList}) {
  const [title, setTitle] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // 編集対象のtodoId
  const setEditId = useRecoilValue(todoEditId);
  const [isEditable, setIsEditable] = useRecoilState(todoIsEditable);
  const closeEditTodo = () => {
    // 編集ボタンを押したtodo itemのidを取得する
    console.log(setEditId)
    setIsEditable(false)
  }



  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' mb={8} >
      <Input value={todoList[(setEditId - 1)].title} onChange={handleChange}/>
      <Button colorScheme='green' onClick={closeEditTodo}><CheckIcon/></Button>
    </Flex>
  );
}

export default TodoItemEditor;

