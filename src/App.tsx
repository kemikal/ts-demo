import './App.css';
import UsersClass from './UsersClass';
import UsersFunction from './UsersFunction';

interface Users {
  id: number,
  uName: string
}

function App() {

 const users: Users[] = [
    {id:1, uName: "Janne 1"},
    {id:2, uName: "Janne 2"},
    {id:3, uName: "Janne 3"},
    {id:4, uName: "Janne 4"},
    {id:5, uName: "Janne 5"},
    {id:6, uName: "Janne 6"},
]

  return (
    <div className="App">
      <h1>TS FTW!</h1>
    
          <UsersClass users={users} />
          <UsersFunction users={users} />
    
    </div>
  );
}

export default App;
