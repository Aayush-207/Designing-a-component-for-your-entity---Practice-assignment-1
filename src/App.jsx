
import './App.css';
import Usercard from './components/usercard.jsx';

function App() {
  const cards = Array.from({ length: 10 });
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  const user = {   
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Springfield, USA',
  }; 

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Usercard key={index} user={user}/>
      ))}
    </div>
  );
}

export default App;
