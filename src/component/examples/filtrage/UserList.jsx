import { useState } from "react";

const UserList = ({ users }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Fonction de filtrage pour filtrer les utilisateurs dont le nom commence par la lettre spécifiée
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().startsWith(filter.toLowerCase())
    // si on veut inclure tous les utilisateur dont leur nom contient le filtre 
    // user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
