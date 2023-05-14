import React, { useState } from "react";
import classes from "./profile.module.css";
import ProfileDetailsForm from "./profile-details-form";
import ProfileTickets from "./profile-tickets";

const Profile = (props) => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [showTickets, setShowTickets] = useState(false);

  const name = "John Doe";
  const rentalProperty = "123 Main St";
  const activeTickets = [
    {
      id: 1,
      subject: "Leaky faucet",
      status: "Open",
    },
    {
      id: 2,
      subject: "Broken window",
      status: "In progress",
    },
    {
      id: 3,
      subject: "Clogged drain",
      status: "Closed",
    },
  ];

  const handleShowDetails = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  const handleShowTickets = () => {
    setShowTickets(!showTickets);
  };

  return (
    <div className={classes.profile}>
      <h1>{`${props.userData.firstName} ${props.userData.lastName}`}</h1>
      <p>Rental property managed: {rentalProperty}</p>
      <p>Email: {props.userData.email}</p>
      <p>Phone Number: {props.userData.phone}</p>
      <p>
        <a href="#" onClick={handleShowDetails}>
          {showProfileDetails ? "Hide Profile Details" : "Update Profile"}
        </a>
      </p>
      {showProfileDetails && (
        <ProfileDetailsForm email={props.userData.email} />
      )}
      <p>
        <a href="#" onClick={handleShowTickets}>
          {showTickets ? "Hide My Current Tickets" : "Show My Current Tickets"}
        </a>
      </p>
      {showTickets && <ProfileTickets tickets={activeTickets} />}
    </div>
  );
};

export default Profile;
