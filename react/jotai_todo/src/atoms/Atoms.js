import { atom } from "jotai";
import { Todo } from "../models/Todo";

const todoList = [new Todo(1, "todo1"), new Todo(2, "todo2")];
export const todoListAtom = atom(todoList);
