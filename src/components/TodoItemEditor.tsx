import { useState } from "react";
import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import {
  todoListState,
  todoIsEditable,
  todoEditId,
  todoEditTitle,
} from "./atom";
import { Flex, Input, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Todo } from "../type/todo"


type Props = {
  todoList:any,
  setTodoList: SetterOrUpdater<Todo>
}

function TodoItemEditor({ todoList , setTodoList } : { todoList:any, setTodoList: SetterOrUpdater<Todo> }) {
  const [title, setTitle] = useRecoilState(todoEditTitle);
  // ↓親コンポーネントからpropsで持ってきましょう
  // const setTodoList = useSetRecoilState(todoListState);
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (e: any) => {
    setTitle(e.target.value);
    console.log(title);
  };

  // 編集対象のtodoId
  const setEditId = useRecoilValue(todoEditId);
  // set関数は使用している形跡がありますが、stateであるisEditableが使われていないということはstate管理する必要がないのではと思うのですが、、、
  const [isEditable, setIsEditable] = useRecoilState(todoIsEditable);
  const closeEditTodo = () => {
    const newArray = todoList.map((item: any) =>
      item.id === setEditId ? { ...item, title: title } : item
    );
    setTodoList(newArray);
    setIsEditable(false);
    setTitle("");
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") closeEditTodo();
  };

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" mb={8}>
      <Input value={title} onChange={handleChange} onKeyDown={handleKeyDown} />
      <Button colorScheme="green" onClick={closeEditTodo}>
        <CheckIcon />
      </Button>
    </Flex>
  );
}

export default TodoItemEditor;
