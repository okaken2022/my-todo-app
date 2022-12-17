import { useRecoilState } from 'recoil';
import { todoListState } from '../components/atom';

import {
  Button,
  ButtonGroup,
  Spacer,
  Flex,
  Box
} from '@chakra-ui/react'

function TotoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const deleteItem = () => {
    const index = todoList.findIndex((listItem) => listItem.id === item.id);
    const newTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  };
  return(
    <>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <div>{item.title}</div>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>編集</Button>
          <Button onClick={deleteItem} colorScheme='red'>削除</Button>
        </ButtonGroup>
      </Flex>
    </>
    ) 
}

export default TotoItem;