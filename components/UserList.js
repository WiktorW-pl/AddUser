import './UserList.css'
import User from "./User.js"

function UserList(props) {
  return (
    <div className="User-List">
      {props.items.map(user => <User name={user.name} age={user.age} key={user.id}/>)}
    </div>
  );
}

export default UserList;
