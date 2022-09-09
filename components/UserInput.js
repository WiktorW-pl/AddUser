import { useState } from 'react';
import './UserInput.css';
import ErrorModal from './ErrorModal';

const UserInput = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, SetError] = useState('');

  const nameHandler = (e) =>{
    setName(e.target.value)
    console.log(name)
}

const ageHandler = (e) =>{
    setAge(e.target.value)
    console.log(age)
}

const submitHandler = (e) =>{
  if(name.trim().length === 0 || age.trim().length === 0){
    SetError({
      title: 'Erorr!',
      msg: 'Sorry, invalid input!'
    })
    return;
  }
  if(+age < 1 ){
    SetError({
      title: 'Erorr!',
      msg: 'Sorry, invalid age!'
    })
    return;
  }
  const newUser = {
    newUserName: name,
    newUserAge: age
  }
  props.onAddUser(newUser);
  setName('')
  setAge('')
}
const closeModal= () =>{
  SetError(null)
}

  return (
    <div className="User-Input">
       {error && <ErrorModal title={error.title} msg={error.msg} confirm={closeModal}></ErrorModal>}
       <h2>Username</h2>
       <input type="text" value={name} onChange={nameHandler} />
       <h2>Age</h2>
       <input type="number" value={age} onChange={ageHandler} />
       <button onClick={submitHandler}>Add</button>
    </div>
  );
}

export default UserInput;
