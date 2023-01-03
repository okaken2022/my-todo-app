import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './selector';
import { Text } from '@chakra-ui/react'

function TodoListStats() {
  const totalNum = useRecoilValue(todoListStatsState);
  return (
    <Text color="#4A6DA7">Todoの登録数:{totalNum}</Text>
  );
}

export default TodoListStats;