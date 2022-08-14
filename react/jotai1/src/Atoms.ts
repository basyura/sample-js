import { atom } from "jotai";

export const countAtom = atom(0);

class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export const userAtom = atom(new User("hoge", 20));
