import { useContext } from "react";
import { UserContext } from "./UserProvider";

const UserControls = () => {
  const { user, loginUser, logoutUser } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <button onClick={logoutUser}>Logout</button>
      ) : (
        <button onClick={() => loginUser({username: "abbes", role: "admin"})}>Login</button>
      )}
    </div>
  );
};
export default UserControls;
