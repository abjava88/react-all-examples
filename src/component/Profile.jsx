import React from "react";

function Avatar({ person, size, handleclick }) {
  return (
    <>
      <img src={person.imageUrl} alt={person.name} width={size} height={size} />
      <button onClick={() => handleclick(person.name)}>send</button>
    </>
  );
}

const Profile = () => {
  const handleClick = (name) => {
    console.log(`Avatar ${name} clicked`);
  };
  return (
    <div>
      <Avatar
        person={{
          name: "Aklilu Lemma",
          imageUrl:
            "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
        }}
        size={100}
        handleclick={handleClick}
      />
      <Avatar
        person={{
          name: "Lin Lanying",
          imageUrl:
            "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
        }}
        size={100}
        handleclick={handleClick}
      />
    </div>
  );
};

export default Profile;
