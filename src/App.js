import logo from './logo.svg';
import './App.css';
import UseMemoCounter from './components/useMemoCounter';
import UseRefDemo from './components/useRefDemo';
import { useState } from 'react';
import MessageContainer from './components/messageContainer';
import Transition from './components/transition';

function fetchMessage() {
  return Promise.resolve("⚛️");
}

function App() {
  const [msgPromise, setMsgPromise] = useState(null);
  const [showMsg, setShowMsg] = useState(false);

  const download = () => {
    setMsgPromise(fetchMessage())
    setShowMsg(true)
  }

  // if(showMsg){
  //   <MessageContainer msgPromise={msgPromise} />
  // } else {
  //   return <button onClick={download} >Start Download!</button>
  // }

  return (
    <div className="App">
      <UseMemoCounter />
      <UseRefDemo />
      <Transition />
    </div>
  );
}

export default App;
