import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { addUser } from './features/User';
import { useState } from 'react';
import { v4  } from 'uuid';


function App() {

  const userlist=useSelector((state)=> state.user.value)

  const dispatch = useDispatch();

  const [name,setname] = useState("");

  const [username,setusername] = useState("")
  
  return (
    <div className="App">

        <div className='input'>
          <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => {setname(e.target.value)}}
          />

          <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => {setusername(e.target.value)}}
          />
          
          <button onClick={()=>{dispatch(addUser({
             id: v4(),
             name,
             username
            }))
              setname('')
              setusername('')}
              }>Add User</button>

        </div>

        <div className='card'>
          {userlist.map((user)=>{
              return(
                <Card 
                key = {user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                />
              )
          })}
        </div>
    </div>
  );
}

export default App;
