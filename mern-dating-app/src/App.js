import './App.css';
import Header from './components/Header.js';
import DatingCard from './components/DatingCard';
import SwipeButton from './components/SwipeButton'
function App() {
return (
<div className="app">
<Header />
<DatingCard />
<SwipeButton />
</div>
);
}
export default App;