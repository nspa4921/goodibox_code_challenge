import React from "react";
import { useUserContext } from "../context/useContext";

const Dashboard = (props) => {
  const { user, logoutUser } = useUserContext();
  const displayName = user.displayName;
  const email = user.email;
  const displayCountry = user.displayCountry;
  const age = props.age;

  return (
    <div>
      <h1>Dashboard </h1>
      <h2>Name: {displayName}</h2>
      <h2>Age: {age}</h2>
      <h2>Email: {email}</h2>
      <h2>Country: {displayCountry}</h2>
      <button onClick={logoutUser}>Log out</button>
    </div>
    
  );
};

export default Dashboard;
