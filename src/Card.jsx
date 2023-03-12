import React from 'react'
import './App.css';
import { useDispatch } from 'react-redux';
import { deleteUser, editUsername } from './features/User';
import { useState } from 'react';



const Card = (props) => {
  
  const dispatch = useDispatch();

  const [username,setusername] = useState("")

  const [editindex,seteditindex] = useState(false);
  
  const editClick=()=>{
    seteditindex(!editindex)
  }
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      <h2>{props.username}</h2>
      {editindex ? 
        (<></>) 
        :
        <button onClick={editClick}>Edit</button>} 
      {editindex ? 
        (<div>
            <input
            placeholder='Edit Username'
            onChange={(e)=> {
            setusername(e.target.value);
            }}
            />
            <button onClick={()=>{
                editClick(); 
                dispatch(editUsername({id:props.id,username:username}));
                setusername('');
                }}
                >
                  Save
                </button>
        </div>)
        :
        (<div></div>)
      }
      {editindex ? 
      (<></>):
      (<button 
        onClick={()=>{dispatch(deleteUser({id : props.id}))}
      }>Delete</button>)
        }
    </div>
  )
}

export default Card
