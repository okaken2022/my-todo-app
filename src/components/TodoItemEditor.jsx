import { useState } from 'react';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, todoIsEditable, todoEditId, todoEditTitle } from '../components/atom';
import {
  Flex,
  Input,
  Button
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

function TodoItemEditor({todoList}) {
  const [title, setTitle] = useRecoilState(todoEditTitle);
  const setTodoList = useSetRecoilState(todoListState);
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title)
  };

  // 編集対象のtodoId
  const setEditId = useRecoilValue(todoEditId);
  const [isEditable, setIsEditable] = useRecoilState(todoIsEditable);
  const closeEditTodo = () => {

    const newArray = todoList.map((item) =>
    item.id === setEditId ? { ...item, title: title } : item
  )
    setTodoList(newArray)
    setIsEditable(false)
    setTitle('')
  }

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' mb={8} >
      <Input
      value={title}
      onChange={handleChange}/>
      <Button colorScheme='green' onClick={closeEditTodo}><CheckIcon/></Button>
    </Flex>
  );
}

export default TodoItemEditor;

