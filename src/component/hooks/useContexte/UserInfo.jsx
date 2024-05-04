import { useContext } from "react";
import { UserContext } from "./UserProvider";

// A component consuming user context
const UserInfo = () => {
  const { user } = useContext(UserContext);
  return (
    <div>{user ? <p>Welcome, {user.username}!</p> : <p>Please log in.</p>}</div>
  );
};
export default UserInfo;
