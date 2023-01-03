import React from 'react'
import { useEffect, useState } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  Text,
  Select,
  Flex
} from '@chakra-ui/react'
import { todoListState, filteredTodos } from '../components/atom'

const TodoFilter = () => {
  const todoList = useRecoilValue(todoListState);
  const [filter, setFilter] = useState('all')
  const [filtered, setFiltered] = 
  useRecoilState(filteredTodos);

  useEffect(() => {
    console.log(todoList)
    const filteringTodos = () => {
      switch (filter) {
        case 'option1':
          setFiltered(todoList.filter((todo) => todo.status === 'option1'))
          break
        case 'option2':
          setFiltered(todoList.filter((todo) => todo.status === 'option2'))
          break
        case 'option3':
          setFiltered(todoList.filter((todo) => todo.status === 'option3'))
          break
        // ここまで
        default:
          setFiltered(todoList)
      }
    }

    filteringTodos()
    
  }, [filter, todoList])

  return (
  <>
  <Flex alignItems='center'  mb='16'>
    <Text>絞り込み：</Text>
    <Select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    size='md'
    bg='white'
    flex='1'>
      <option value='all'>全て</option>
      <option value='option1'>未完了</option>
      <option value='option2'>着手</option>
      <option value='option3'>完了</option>
    </Select>
  </Flex>
  </>
  )
}

export default TodoFilter