import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Router from "./Router";

const queryClient = new QueryClient();

function App() {
  return <Router />;
}

export default App;
