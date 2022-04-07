import './App.css';
import Header from './Views/Header/Header';
import { Auth } from './Views/Auth/Auth';
import { BrowserRouter } from 'react-router-dom';
import { getUser, logout } from './services/user';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Todo from './Views/Todo';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header handleLogout={handleLogout} currentUser={currentUser} />
        <Route exact path="/">
          {!currentUser ? <Auth setCurrentUser={setCurrentUser} /> : <Redirect to="/todo" />}
        </Route>
        <Route path="/todo">{currentUser ? <Todo /> : <Redirect to="/" />}</Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
