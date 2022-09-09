import './User.css'


function User(props) {
  return (
    <div className="User-container">
        <p>User</p>
        <p>{props.name + " " + props.age}</p>
    </div>
  );
}

export default User;
