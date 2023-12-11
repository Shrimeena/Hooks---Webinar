import './App.css';
import AlertDialog from './components/AlertDialog';
import DemoUseCallback from './components/DemoUseCallback';
import UseMemoCounter from "./components/DemoUseMemo";
import UseRefDemo from "./components/DemoUseRef";
import UseTransitionDemo from "./components/DemoUseTransition";
import DisplayScreen from './components/DisplayScreen';

function App() {

  const backgroundImageStyle = {
    backgroundImage: "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    /* Other styles can be added as needed */
    height: '100vh', // Set the height of the component
  };

  return (
    <div style={backgroundImageStyle} >
        <DisplayScreen />
      {/* <hr />
      <UseMemoCounter />
      <hr />
      <UseRefDemo />
      <hr />
      <UseTransitionDemo />
      <hr />
      <DemoUseCallback /> */}
    </div>
  );
}

export default App;
