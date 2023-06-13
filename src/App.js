
import './App.css';
import UserInfo from './components/UserInfo';

const list=[{name:"robson", birthday: "06/09/1999", email:"robson@gmail.com"},
{name:"kaue", birthday: "08/09/2004", email:"kaue@gmail.com"},
{name:"carine", birthday: "28/09/1998", email:"carine@gmail.com"}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <UserInfo users={list}/>
      </header>
    </div>
  );
}

export default App;
