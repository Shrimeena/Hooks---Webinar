import './App.css';
import UseMemoCounter from "./components/useMemoCounter";
import UseRefDemo from "./components/useRefDemo";
import UseTransitionDemo from "./components/useTransition";

function App() {
  return (
    <div className="App" style={{backgroundImage: 
      "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')"}}>
      <hr />
      <UseMemoCounter />
      <hr />
      <UseRefDemo />
      <hr />
      <UseTransitionDemo />
    </div>
  );
}

export default App;
