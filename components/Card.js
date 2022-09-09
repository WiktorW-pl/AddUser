import './Card.css';
import UserInput from "./UserInput"

const Card = (props) => {
  const addNewUser = (enteredUserData) =>{
    const newUser = {
      name: enteredUserData.newUserName,
      age: enteredUserData.newUserAge,
      id: Math.random().toString()
    };
    
    props.onAddUserData(newUser)

  }

  return (
    <div className="Card">
        <UserInput onAddUser={addNewUser}></UserInput>
    </div>
  );
}

export default Card;
