import React, { useState } from "react";
import classes from "./profile.module.css";
import ProfileDetailsForm from "./profile-details-form";
import ProfileTickets from "./profile-tickets";

const Profile = (props) => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const name = "John Doe";
  const rentalProperty = "123 Main St";
  const activeTickets = [
    {
      id: 1,
      subject: "Leaky faucet",
      status: "Open"
    },
    {
      id: 2,
      subject: "Broken window",
      status: "In progress"
    },
    {
      id: 3,
      subject: "Clogged drain",
      status: "Closed"
    }
  ];

  const handleShowDetails = () => {
    setShowProfileDetails(true);
  }

  return (
    <div className={classes.profile}>
      <h1>{name}</h1>
      <p>Rental property managed: {rentalProperty}</p>
      <p>User Email: {props.email}</p>
      <ProfileTickets tickets={activeTickets} />
      <button onClick={handleShowDetails}>Update Profile</button>
      {showProfileDetails && <ProfileDetailsForm />}
    </div>
  );
};

export default Profile;