import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ListItem, UnorderedList, Text, Select, Flex } from "@chakra-ui/react";
import { todoListState, } from "../components/atom";
import { todoIsEditable, filteredTodos } from "../components/atom";
import TodoListStats from "../components/TodoListStats";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoItemEditor from "./TodoItemEditor";
import TodoFilter from "./TodoFilter";
import { Todo } from "../type/todo"

// 配列での型の定義の仕方

function TodoList() {
  // return内でTodoItemCreatorにpropsとしてsetTodoListも渡しましょう。TodoItemCreatorのなかでまた新しいset関数を定義されてたので！
  // TodoItemEditorも同じく

  const [todoList, setTodoList] = useState<Todo>({
    id: 0,
    title: '',
    date: '',
    status: '',
  });
  const isEditable = useRecoilValue(todoIsEditable);
  const filtered = useRecoilValue(filteredTodos);
  return (
    <>
      {isEditable ? (
        <TodoItemEditor todoList={todoList} setTodoList={setTodoList}/>
      ) : (
        <>
          <TodoItemCreator todoList={todoList} setTodoList={setTodoList}/>
          <TodoFilter />
          <UnorderedList listStyleType={"none"}>
            <TodoListStats />
            {filtered.map((item, index) => (
              <ListItem key={index} mb={4}>
                <TodoItem item={item} />
              </ListItem>
            ))}
          </UnorderedList>
        </>
      )}
    </>
  );
}

export default TodoList;
