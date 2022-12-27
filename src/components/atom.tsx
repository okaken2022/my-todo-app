import { atom } from 'recoil';

// Todoリスト
export const todoListState = atom({
  key: 'todoListState',
  default: [
  ]
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
})