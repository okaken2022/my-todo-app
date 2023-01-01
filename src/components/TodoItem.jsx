import { useState, forwardRef } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import { useRecoilState } from 'recoil';
import { todoListState, todoIsEditable, todoEditId,todoEditTitle } from '../components/atom';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Box,
  Text,
  Select,
  Tag,
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

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

//react-datepicker 
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Button onClick={onClick} ref={ref} size='xs'>
      {value}
    </Button>
  ));

// 編集機能
  const [isEditable, setIsEditable] = useRecoilState(todoIsEditable);

  // 編集対象のtodoId
  const [editId, setEditId] = useRecoilState(todoEditId);
  // 編集対象のtodoTitle
  const [title, setTitle] = useRecoilState(todoEditTitle);
  const openEditTodo = (id) => {
    setIsEditable(true)
    // 編集ボタンを押したtodo itemのidをsetEditIdに入れる
    setEditId(id)
    // 編集ボタンを押したtodo itemのtitleをグローバルstateのtodoEditTitleに入れる
    setTitle(todoList[id - 1].title)
  }
  return(
    <>
      <Card>
        <CardBody>
          <Flex minWidth='max-content' alignItems='center' gap='2'>
            {/* Todoタイトル */}
            <Box flex='1' p='2'>
              <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box><Text as='b'>{item.id}.</Text></Box>
                <div>{item.title}</div>
              </Flex>
            </Box>

            {/* 期限 */}
            <Box p="2">
              <Tag>期限</Tag>
              <DatePicker
                
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
              />
            </Box>

            {/* 状態 */}
            <Box p='2'>
              <Tag>状態</Tag>
              <Select placeholder={item.status} size='xs'>
                <option value='option1'>未完了</option>
                <option value='option2'>着手</option>
                <option value='option3'>完了</option>
              </Select>
            </Box>
            {/* ボタン類 */}
            <ButtonGroup gap='2'>
              <Button onClick={() => openEditTodo(item.id)} colorScheme='teal'><EditIcon/></Button>
              <Button onClick={deleteItem} colorScheme='red'><DeleteIcon/></Button>
            </ButtonGroup>
          </Flex>
        </CardBody>
      </Card>
    </>
    ) 
}

export default TotoItem;