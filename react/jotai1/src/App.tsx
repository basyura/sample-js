import "./App.css";
import Hoge from "./components/hoge";
import Fuga from "./components/fuga";
import Foo from "./components/foo";
import User from "./components/user";
import UserEdit from "./components/userEdit";

function App() {
  return (
    <div className="App">
      <Foo />
      <Hoge />
      <Fuga />
      <User />
      <UserEdit />
    </div>
  );
}

export default App;
