import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signupUser } from '../../services/user';

export function Auth(setCurrentUser) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
      setCurrentUser(resp.email);
      history.push('/');
    } catch (error) {
      setError(e.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const resp = await signupUser(email, password);
      setCurrentUser(resp.email);
      history.push('/');
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h3>Sign In</h3>

      <div>{error}</div>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <input type="submit" />
      </form>
      <h3>Sign Up</h3>

      <form onSubmit={handleSignUp}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
