import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [
  ]
});

// 編集可能
export const todoIsEditable = atom({
  key: 'todoIsEditable',
  default: false
})