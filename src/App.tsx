import React from 'react';
import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import TodoList from './components/TodoList';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    // ヘッダー
    <div className ="App">
      <Box bg='#4A6DA7'
        w='100%'
        p={4} 
        color='white'>
        <Text fontSize='2xl'>
          Todo List
        </Text>
      </Box>
    {/* フォーム */}
      <Box p={4} >
        {/* Recoil */}
        <RecoilRoot>
          <TodoList />
        </ RecoilRoot>
      </Box>
    </div>
  );
}

export default App;