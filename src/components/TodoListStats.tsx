import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './selector';
import { Text } from '@chakra-ui/react'

function TodoListStats() {
  const totalNum = useRecoilValue(todoListStatsState);
  return (
    <Text color="#48BB78">Todoの登録数:{totalNum}</Text>
  );
}

export default TodoListStats;