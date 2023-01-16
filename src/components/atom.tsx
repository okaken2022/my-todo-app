import { atom } from 'recoil';

// Todoリスト

export const todoListState = atom({
  key: 'todoListState',
  default: {
    id: 0,
    title: '',
    date: '',
    status: '',
  },
});



// 編集可能
export const todoIsEditable = atom({
  key: 'todoIsEditable',
  default: false
});

// 編集対象のtodoId
export const todoEditId = atom({
  key: 'todoEditId',
  default: ''
});

// 編集対象のtodoTitle
export const todoEditTitle = atom({
  key: 'todoEditTitle',
  default: ''
});

//絞り込み後のtodoList
export const filteredTodos = atom({
  key: 'filteredTodos',
  default: [
  ]
});