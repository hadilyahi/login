import React from 'react';
import { useSelector } from 'react-redux'; 
import { selectUser } from './features/userSlice'; 
import Login from './Components/Login';
import Logout from './Components/Logout';

const App = () => {
  const user = useSelector(selectUser); 

  return (
    <div className="m-0 p-0 bg-white">
      {user ? <Logout /> : <Login />}
    </div>
  );
};

export default App;
