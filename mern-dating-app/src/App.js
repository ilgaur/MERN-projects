import './App.css';
import Header from './components/header.js';
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