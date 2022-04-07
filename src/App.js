import './App.css';
import Header from './Views/Header/Header';
import { Auth } from './Views/Auth/Auth';
import { BrowserRouter } from 'react-router-dom';
import { getUser } from './services/user';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Trial from './Views/Trial';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <div className="App">
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Route exact path={'/'}>
          {!currentUser ? <Auth setCurrentUser={setCurrentUser} /> : <Redirect to={'/trial'} />}
        </Route>
        <Route path={'/trial'}>
          <Trial />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
