import logo from './logo.svg';
import './App.css';
import DemoTabs from './components/DemoTabs';
import DemoTodo from './components/DemoTodo';
import DemoWithReducer from './components/DemoWithReducer';
import { Provider } from 'react-redux';
import store from './store';
import { StoreProvider } from './helperComponents/useStore';
import DemoWithContext from './components/DemoWithContext';
import { TodoProvider } from './helperComponents/useTodoContext';
import TodoList from './components/TodoList';

const initialState = {
  todos: []
};

function App() {
  return (
    <div className="App">
      <h1 className='title'>Tab Application</h1>
      {/* <TodoProvider initialState={initialState}>
        <TodoList />
      </TodoProvider> */}
      {/* <DemoTabs /> */}
      <Provider store={store}>
        <DemoWithReducer />
      </Provider>
      {console.log("SHRII")}
      {/* <StoreProvider initialState={initialState}>
        <DemoWithContext />
      </StoreProvider>   */}
      
    </div>
  );
}

export default App;
