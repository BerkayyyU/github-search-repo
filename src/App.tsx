import './App.css';
import Profile from './pages/profile';

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <header className="flex justify-between py-4 fixed top-0 left-0 w-full z-50 header">
        <a href="">MVST</a>
        <a href="">Portfolio</a>
      </header>
      <Profile />
    </div>
  );
}

export default App;
