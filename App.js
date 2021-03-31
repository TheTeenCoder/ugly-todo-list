import './App.css';
import TodoList from './TodoList/TodoList';


function App() {
  const messages = [
    "Make your day productive!",
    "Another day is another opportunity.",
    "Realize your potential.",
    "Say it with me, I'm going to be productive TODAY.",
    "Life is short, make it worthwhile :)"
  ]
  return (
    <div className="App">
      <h1>{messages[Math.floor(Math.random() * messages.length)]}</h1>
      <TodoList/>
    </div>
  );
}

export default App;
