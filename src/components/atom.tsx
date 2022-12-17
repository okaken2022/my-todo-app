import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: '1',
      title: '',
      isComplete: false,
    },
  ],
});