import { useState } from "react";
import { useSetRecoilState, SetterOrUpdater } from "recoil";
import { todoListState } from "./atom";
import { Flex, Input, Button } from "@chakra-ui/react";
import { Todo } from "../type/todo"

function TodoItemCreator({ todoList , setTodoList } :{ todoList:any, setTodoList: SetterOrUpdater<Todo> }) {
  const [title, setTitle] = useState("");
  // ↓親コンポーネントからset関数も引っ張ってきましょう
  // ↓このstartDate関数不要かなと思います。
  // setTodoList関数の中でdate: new Date()にすればいいのではないでしょうか。
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (e:any) => {
    setTitle(e.target.value);
  };

  // Todo追加
  const addItem = () => {
    // フォームが空の場合追加しない
    if (title === "") return;

    setTodoList((oldTodoList: ) => [
      ...oldTodoList,
      {
        id: todoList.length + 1,
        title: title,
        date: startDate,
        status: "option1",
      },
    ]);
    setTitle("");
  };

  // Enter押下で追加
  const handleKeyDown = (e:any) => {
    if (e.key === "Enter") addItem();
  };

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" mb={8}>
      <Input
        placeholder="Todoを追加"
        value={title}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button colorScheme="blue" onClick={addItem}>
        追加
      </Button>
    </Flex>
  );
}

export default TodoItemCreator;
